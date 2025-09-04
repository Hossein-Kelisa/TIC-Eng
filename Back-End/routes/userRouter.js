import express from "express";
import { makeAdmin } from "../controllers/userController.js";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.patch("/:id/make-admin", protect, adminOnly, makeAdmin);

export default router;
