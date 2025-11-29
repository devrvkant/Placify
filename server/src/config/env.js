import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
};

export default config;
