import express from "express";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

// فقط آپلود تست
router.post("/upload", upload.single("file"), (req, res) => {
  try {
    console.log("📂 File uploaded:", req.file);
    res.json({
      message: "File uploaded successfully!",
      file: req.file,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
