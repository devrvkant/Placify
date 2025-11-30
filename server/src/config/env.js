import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  mongoDbUri: process.env.MONGODB_URI,
  placifyDbName: process.env.PLACIFY_DB_NAME,
};

export default config;
