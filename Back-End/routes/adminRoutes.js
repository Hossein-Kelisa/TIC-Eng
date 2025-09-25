import express from "express";
import User from "../models/userModel.js";
import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";
import AppError from "../utils/AppError.js";

const router = express.Router();

//improve a user to admin
router.patch("/promote/:id", protect, adminOnly, async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return next(new AppError(req.__("user_not_found"), 404));
    }
    user.role = "admin";
    await user.save();
    res.status(200).json({
      status: "success",
      message: req.__("user_promoted"),
    });
  } catch (err) {
    next(err);
  }
});
export default router;
