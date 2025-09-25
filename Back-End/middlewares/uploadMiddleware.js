import multer from "multer";

// storage in memory, not on local disk
const storage = multer.memoryStorage();

// file filter: only PDFs
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error(req.__("errors.file_type_invalid")), false);
  }
};

// create middleware
export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // max 10MB
});
