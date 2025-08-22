import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Allowed origins (local + Netlify)
const allowedOrigins = [
  "http://localhost:5173",
  "https://tic-eng.netlify.app",
  "https://tic-eng.com",
  "https://www.tic-eng.com",
];

// CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g., mobile apps, Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("CORS not allowed for this origin: " + origin));
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
