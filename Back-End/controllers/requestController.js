import Request from "../models/request.js";
import { sendNewRequestEmail } from "../utils/email.js";
import multer from "multer";
import { s3, PutObjectCommand } from "../utils/s3.js";
import { v4 as uuidv4 } from "uuid";

// ✅ multer middleware (keeps file in memory, not local folder)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
});
export const uploadMiddleware = upload.single("file");

/**
 * Create a new service request
 * expects: firstName, lastName, email, company?, service, message?, phone, file (pdf)
 */
export const createRequest = async (req, res, next) => {
  try {
    const { firstName, lastName, email, company, service, message, phone } =
      req.body;

    // ✅ check required fields
    if (!firstName || !lastName || !email || !service || !phone) {
      return res.status(400).json({
        message: "firstName, lastName, email, service, phone are required",
      });
    }

    // ✅ upload file to S3 (if exists)
    let fileUrl;
    if (req.file) {
      const key = `forms/${Date.now()}-${uuidv4()}-${req.file.originalname.replace(
        /\s+/g,
        "_"
      )}`;

      const putParams = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
      };

      await s3.send(new PutObjectCommand(putParams));

      // construct public URL
      fileUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    }

    // ✅ save request in database
    const savedRequest = await Request.create({
      firstName,
      lastName,
      email: String(email).toLowerCase(),
      company,
      service,
      message,
      phone,
      fileUrl,
    });

    // ✅ send email notification (with link if file uploaded)
    await sendNewRequestEmail(savedRequest, savedRequest.fileUrl);

    // ✅ return response
    return res.status(201).json({
      message: "✅ Request submitted successfully!",
      data: savedRequest,
    });
  } catch (err) {
    if (next) return next(err);
    return res.status(500).json({ message: "❌ Server error" });
  }
};

/**
 * Get all service requests (Admin only)
 */
export const getRequests = async (req, res, next) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 });

    return res.json({
      message: "✅ Requests fetched successfully",
      count: requests.length,
      data: requests,
    });
  } catch (err) {
    if (next) return next(err);
    return res.status(500).json({ message: "❌ Server error" });
  }
};
