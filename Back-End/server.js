import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import authRouter from "./routes/authRoutes.js";
import requestRouter from "./routes/requestRoutes.js";
import { corsOptions } from "./config/corsOption.js";
import errorHandler from "./middlewares/errorHandler.js";
import AppError from "./utils/AppError.js";

dotenv.config();
connectDB();

const app = express();

// CORS
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(cookieParser());

//static files for uploads
app.use("/uploads", express.static("uploads"));

// API routes
app.use("/api/auth", authRouter);
app.use("/api/requests", requestRouter);

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running 🚀" });
});

// Handle 404 errors (don't find any routes)
app.use((req, res, next) => {
  next(new AppError(`Route not found: ${req.originalUrl}`, 404));
});

// Global error handling middleware
app.use(errorHandler);

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
