import jwt from "jsonwebtoken";

import config from "../config/env.js";
import User from "../models/user.model.js";

// Route Protection by checking if user is authenticated or not
export const auth = async (req, res, next) => {
  try {
    // 1. Get token from cookie
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized - No token provided!",
      });
    }

    // 2. Verify token
    const decodedToken = jwt.verify(token, config.jwtSecret);
    if(!decodedToken || !decodedToken.userId){
      return  res.status(401).json({ message: "Unauthorized - Invalid token!" });
    }

    // 3. Load user from DB
    const user = await User.findById(decodedToken.userId);
    if (!user) {
      return res.status(401).json({ message: "Authentication failed - user not found!" });
    }

    if (user.status === "blocked") {
      return res
        .status(403)
        .json({ message: "Account blocked, contact admin!" });
    }

    // 4. Attach to req for later middlewares/controllers
    req.user = user;

    next();
  } catch (err) {
    console.error("Error in Auth Middleware:", err.message);
    return res.status(500).json({ message: "Internal Server Error, Please try again later!" });
  }
};
