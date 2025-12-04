import jwt from "jsonwebtoken";

import config from "../config/env.js";

// cookie options used in auth controller
export const cookieOptions = {
  httpOnly: true,
  secure: config.nodeEnv === "production",
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

// Auth token (for login)
export const generateAuthToken = (userId) => {
  return jwt.sign({ userId }, config.jwtSecret, {
    expiresIn: "7d",
  });
};

// Email verification token (shorter expiry, separate secret recommended)
export const generateEmailVerifyToken = (userId) => {
  return jwt.sign({ userId }, config.jwtEmailVerifySecret, {
    expiresIn: "1d",
  });
};
