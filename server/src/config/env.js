import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  mongoDbUri: process.env.MONGODB_URI,
  placifyDbName: process.env.PLACIFY_DB_NAME,
  jwtSecret: process.env.JWT_SECRET,
  jwtEmailVerifySecret: process.env.JWT_EMAIL_VERIFY_SECRET,
  senderEmail: process.env.SENDER_EMAIL,
  resendApiKey: process.env.RESEND_API_KEY,
  devClientUrl: process.env.DEV_CLIENT_URL,
  prodClientUrl: process.env.PROD_CLIENT_URL,
};

export default config;
