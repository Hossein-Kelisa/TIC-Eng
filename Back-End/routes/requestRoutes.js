import express from "express";
import { createRequest, getRequests, updateRequestStatus, uploadMiddleware } from "../controllers/requestController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";

const router = express.Router();

// submit full form with file upload
router.post("/", uploadMiddleware, createRequest);
// router.post("/", protect, uploadMiddleware, createRequest);  //** authentication before sending requests is disabled for now **

// get all service requests (Admin only)
router.get("/", protect, adminOnly, getRequests);

// update request status (Admin only)
router.patch("/:id/status", protect, adminOnly, updateRequestStatus);

export default router;
