import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import config from "../config/env.js";
import {
  cookieOptions,
  generateAuthToken,
  generateEmailVerifyToken,
} from "../utils/authUtils.js";
import { sendVerificationEmail } from "../services/resend/emails.js";

// tiny helper so you can show onboarding UI easily
const getIsProfileComplete = (user) => {
  if (user.role === "student") {
    return !!user.studentProfile?.enabled;
  }
  if (user.role === "recruiter") {
    return !!user.recruiterProfile?.enabled;
  }
  return true; // admins
};

// @desc    Register new user (student or recruiter) – NO auto login
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;
    if (!fullName || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (!["student", "recruiter"].includes(role)) {
      return res.status(400).json({ message: "Invalid role!" });
    }

    // check if user with this email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: "Email already registered!" });
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // create new user in DB
    const newUser = await User.create({
      fullName,
      email,
      passwordHash,
      role,
      isEmailVerified: false,
      status: "active",
      studentProfile:
        role === "student"
          ? { enabled: false } // must complete profile later
          : undefined,
      recruiterProfile:
        role === "recruiter"
          ? { enabled: false, isCompanyVerified: false }
          : undefined,
    });

    // create email verification token
    const verifyToken = generateEmailVerifyToken(newUser._id);

    // Frontend route where user lands after clicking email link
    const verifyUrl =
      config.nodeEnv === "production"
        ? `${config.prodClientUrl}/auth/verify-email?token=${verifyToken}`
        : `${config.devClientUrl}/auth/verify-email?token=${verifyToken}`;

    // send verification email
    await sendVerificationEmail(newUser.email, newUser.fullName, verifyUrl);

    return res.status(201).json({
      message:
        "Registration successful. Please check your email to verify your account before logging in.",
    });
  } catch (err) {
    console.error("Error in registering user: ", err.message);
    return res.status(500).json({ message: "Internal Server Error, Please try again later!" });
  }
};

// @desc    Verify email using token sent to user
// @route   GET /api/auth/verify-email?token=xxx
// @access  Public
export const verifyEmailToken = async (req, res) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ message: "Verification token missing!" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, config.jwtEmailVerifySecret);
    } catch (err) {
      return res.status(400).json({ message: "Invalid or expired token!" });
    }

    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (user.isEmailVerified) {
      return res
        .status(200)
        .json({ message: "Email already verified. You can log in now." });
    }

    user.isEmailVerified = true;
    await user.save();

    return res
      .status(200)
      .json({ message: "Email verified successfully. You can log in now." });
  } catch (err) {
    console.error("Error in verifying email: ", err.message);
    return res.status(500).json({ message: "Internal Server Error, Please try again later!" });
  }
};

// @desc    Login user & set auth cookie (only if email verified)
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+passwordHash");

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    if (!user.isEmailVerified) {
      return res.status(403).json({
        message:
          "Email not verified. Please check your inbox and verify your email before logging in!",
      });
    }

    if (user.status === "blocked") {
      return res
        .status(403)
        .json({ message: "Your account is blocked by admin!" });
    }

    const token = generateAuthToken(user._id);
    res.cookie("token", token, cookieOptions);

    const userObj = user.toObject();

    const isProfileComplete = getIsProfileComplete(user);

    return res.json({
      message: "Login successful.",
      user: userObj,
      isProfileComplete,
      // no JWT in body on purpose, only in httpOnly cookie
    });
  } catch (err) {
    console.error("Error in logging in: ", err.message);
    return res.status(500).json({ message: "Internal Server Error, Please try again later!" });
  }
};

// @desc    Logout user - clear auth cookie
// @route   POST /api/auth/logout
// @access  Private
export const logoutUser = (req, res) => {
  res.cookie("token", "", { maxAge: 1 });
  return res.json({ message: "Logged out successfully." });
};

// @desc    Get current logged-in user (used on refresh / app load)
// @route   GET /api/auth/me
// @access  Private
export const getCurrentUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Not Authenticated!" });
    }

    const userObj = req.user.toObject();
    delete userObj.passwordHash;

    const isProfileComplete = getIsProfileComplete(req.user);

    return res.json({
      user: userObj,
      isProfileComplete,
    });
  } catch (err) {
    console.error("Error in getting current user: ", err.message);
    return res.status(500).json({ message: "Internal Server Error, Please try again later!" });
  }
};
