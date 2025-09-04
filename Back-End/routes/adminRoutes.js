import express from "express";
import User from "../models/userModel.js";
import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";

const router = express.Router();

//improve a user to admin
router.patch("/promote/:id", protect, adminOnly, async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return next(new AppError("User not found", 404));
    }
    user.role = "admin";
    await user.save();
    res.status(200).json({
      status: "success",
      message: "User promoted to admin",
    });
  } catch (err) {
    next(err);
  }
});
export default router;