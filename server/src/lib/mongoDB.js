import mongoose from "mongoose";

import config from "../config/env.js";

const connectToMongoDB = async () => {
  try {
    const DB_URI = config.mongoDbUri;
    const DB_NAME = config.placifyDbName;
    if (!DB_URI || !DB_NAME)
      throw new Error("MONGODB_URI or PLACIFY_DB_NAME is not defined in environment variables!");

    await mongoose.connect(DB_URI, { dbName: DB_NAME });

    console.log("MongoDB connected!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

export default connectToMongoDB;
