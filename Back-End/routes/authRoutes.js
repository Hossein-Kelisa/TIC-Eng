import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { validateRegister } from "../middlewares/validateRegister.js";
import { validateLogin } from "../middlewares/validateLogin.js";

const authRouter = express.Router();

authRouter.post("/register", validateRegister, registerUser);
authRouter.post("/login", validateLogin, loginUser);
authRouter.get("/me", protect, getMe);
authRouter.get("/verify", protect, (req, res) => {
  // token valid → return user info
  res.json({
    valid: true,
    user: {
      _id: req.user._id,
      userName: req.user.userName,
      email: req.user.email,
    },
  });
});

export default authRouter;
