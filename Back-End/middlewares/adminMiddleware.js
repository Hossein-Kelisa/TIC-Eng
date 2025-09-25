import AppError from "../utils/AppError.js";

export const adminOnly = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return next(new AppError(req.__("errors.access_denied"), 403));
  }
  next();
};
