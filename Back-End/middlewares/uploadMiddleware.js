import multer from "multer";
import path from "path";

// مسیر ذخیره‌سازی فایل‌ها
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/forms"); // ذخیره در پوشه uploads/forms
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // مثل: 123456.pdf
  },
});

// فیلتر فقط برای PDF
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"), false);
  }
};

// ساخت middleware
export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // حداکثر 5MB
});
