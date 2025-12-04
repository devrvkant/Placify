import express from "express";

import cors from "cors";
import cookieParser from "cookie-parser";

import config from "./config/env.js";
import connectToMongoDB from "./lib/mongoDB.js";
import authRouter from "./routes/auth.routes.js";

const app = express();
const PORT = config.port;

// using middlewares
app.use(express.json()); // to parse JSON request bodies
app.use(cookieParser()); // to parse incoming auth cookies
// cors setup
app.use(
  cors({
    origin:
      config.nodeEnv === "production"
        ? ["https://Placify.jangir.me"]
        : ["http://localhost:5173", "https://Placify.jangir.me"],
    credentials: true,
  })
);

// using routes
app.get("/", (req, res) => {
  res.send("Welcome to Placify Server!!!");
});
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
  // As soon as the server starts, connect to MongoDB
  connectToMongoDB();
});
