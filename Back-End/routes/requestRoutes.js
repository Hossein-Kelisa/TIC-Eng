import express from "express";
import { upload } from "../middlewares/uploadMiddleware.js";
import { createRequest } from "../controllers/requestController.js";

const router = express.Router();

// submit full form with file upload
router.post("/", upload.single("file"), createRequest);

export default router;
