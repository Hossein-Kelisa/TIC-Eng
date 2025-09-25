import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protect = async (req, res, next) => {
  let token;

  // Get token from header if it exists
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // If no token, return 401
  if (!token) {
    return res.status(401).json({ message: req.__("errors.not_authorized_no_token") });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request (without password)
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      return res.status(401).json({ message: req.__("not_authorized_user_not_found") });
    }

    next(); // allow access
  } catch (error) {
    res.status(401).json({ message: req.__("errors.not_authorized_token_failed") });
  }
};

// middlewares/authMiddleware.js
export const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }
  return res.status(403).json({ message: req.__("errors.access_denied") });
};
