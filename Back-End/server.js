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
import adminRouter from "./routes/adminRoutes.js";
import userRouter from "./routes/userRouter.js";
import i18n from "./config/i18n.js";

dotenv.config();
connectDB();

const app = express();

// CORS
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Internationalization
app.use(i18n.init);

//static files for uploads
app.use("/uploads", express.static("uploads"));

// API routes
app.use("/api/auth", authRouter);
app.use("/api/requests", requestRouter);
app.use("/api/admin", adminRouter);
app.use("/api/users", userRouter);

// Root route (for Render health check or quick test)
app.get("/", (req, res) => {
  res.send(req.__("welcome"));
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: req.__("health_ok") });
});

// Wake-up route for Render 1
app.get("/api/wakeup", (req, res) => {
  res.status(200).send("Backend is awake");
  console.log("Wake-up request received");
});

// Ignore Vite and browser automatic requests 2
app.get(["/__vite_ping", "/favicon.ico"], (req, res) => {
  return res.status(204).end();
});

// Handle 404 (Not Found) 3
app.use((req, res, next) => {
  // Optional: log only in development 5
  if (process.env.NODE_ENV === "development") {
    console.log(`404 Not Found: ${req.method} ${req.originalUrl}`);
  }

  // Return a normal 404 JSON, not an error 6
  return res.status(404).json({
    status: "fail",
    message: req.__("errors.route_not_found"),
  });
});

// Handle 404 errors (don't find any routes)
app.use((req, res, next) => {
  next(new AppError(req.__("errors.route_not_found"), 404));
});

// Global error handling middleware
app.use(errorHandler);

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
