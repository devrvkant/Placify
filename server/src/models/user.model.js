import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Auth Basics
    fullName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordTokenExpiresAt: Date,
    // Role and Status
    role:{
      type: String,
      enum: ["student", "recruiter", "admin"],
      default: "student",
      index: true,
    },
    status: {
      type: String,
      enum: ["active", "blocked"],
      default: "active",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    verificationTokenExpiresAt: Date,
    // Common Optional Fields
    phone: {
      type: String,
      trim: true,
      maxlength: 15,
    },
    avatarUrl: {
      type: String,
    },
    // Student-specific profile
    studentProfile: {
      enabled: { type: Boolean, default: false }, // helpful if same user can change role later

      collegeName: String,
      rollNumber: String,
      branch: String, // e.g. CSE, IT, ECE
      yearOfStudy: Number, // 1,2,3,4
      graduationYear: Number,

      cgpa: Number,
      skills: [String],
      resumeUrl: String,

      placementStatus: {
        type: String,
        enum: ["looking", "not_looking", "placed"],
        default: "looking",
      },
    },
    // Recruiter / Company profile
    recruiterProfile: {
      enabled: { type: Boolean, default: false },

      companyName: String,
      companyWebsite: String,
      companyLogoUrl: String,
      companyDescription: String,

      designation: String, // e.g. HR, Talent Acquisition
      officialEmail: String,

      isCompanyVerified: {
        type: Boolean,
        default: false, // admin can flip this to true after verification
      },
    },
    // Admin profile / permissions
    adminProfile: {
      superAdmin: {
        type: Boolean,
        default: false,
      },
      // If later you want granular rights like "can_manage_tests", "can_manage_companies"
      permissions: [
        {
          type: String,
          // example values (no enum to keep flexible): "manage_users", "manage_jobs", "manage_tests"
        },
      ],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
