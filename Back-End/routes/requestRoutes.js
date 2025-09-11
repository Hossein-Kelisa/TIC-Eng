import express from "express";
import { upload } from "../middlewares/uploadMiddleware.js";
import { createRequest, getRequests, updateRequestStatus } from "../controllers/requestController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";

const router = express.Router();

// submit full form with file upload
router.post("/", upload.single("file"), createRequest);

// get all service requests (Admin only)
router.get("/", protect, adminOnly, getRequests);

// update request status (Admin only)
router.patch("/:id/status", protect, adminOnly, updateRequestStatus);

export default router;
