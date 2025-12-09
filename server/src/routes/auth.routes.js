import { Router } from "express";

import { getCurrentUser, loginUser, logoutUser, registerRecruiter, registerStudent, verifyEmailToken } from "../controllers/auth.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const authRouter = Router();

// Public Routes (No Auth Required)
// 1. Create a new user (student and recruiter)
authRouter.post("/register/student", registerStudent);
authRouter.post("/register/recruiter", registerRecruiter);

// 2. Verify email address
authRouter.get("/verify-email", verifyEmailToken);

// 3. Authenticate user & return JWT token
authRouter.post("/login", loginUser);

// Protected Routes (Auth Token Required - uses auth middleware)
// 1. Destroy token / clear cookie
authRouter.post("/logout", auth, logoutUser);

// 2. Fetch current user profile using JWT (for auto-login on refresh)
authRouter.get("/me", auth, getCurrentUser);

export default authRouter;
