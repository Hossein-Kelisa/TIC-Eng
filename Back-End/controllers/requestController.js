import Request from "../models/request.js";
import { sendNewRequestEmail } from "../utils/email.js";
import multer from "multer";
import { s3, PutObjectCommand } from "../utils/s3.js";
import { v4 as uuidv4 } from "uuid";

// Multer middleware (keep files in memory)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
});
export const uploadMiddleware = upload.single("file");

export const createRequest = async (req, res, next) => {
  try {
    // const { company, service, message, phone } = req.body;  // if authentication is needed**
    // const { _id: userId, firstName, lastName, email } = req.user;  // if authentication is needed**

    const { company, service, message, phone, firstName, lastName, email } =
      req.body;     // if authentication is no needed**

    const userId = req.user?._id || null;  // if authentication is no needed**
    const userFirstName = req.user?.firstName || firstName || "Guest";  // if authentication is no needed**
    const userLastName = req.user?.lastName || lastName || "";  // if authentication is no needed**
    const userEmail = req.user?.email || email || "";   // if authentication is no needed**

    // Validate required fields
    if (!company || !service || !phone) {
      return res.status(400).json({
        message: req.__("requests.missing_fields"),
      });
    }

    // Upload file to S3 if exists
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

      fileUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    }

    // Save request in database
    const savedRequest = await Request.create({
      user: userId,
      firstName,
      lastName,
      email: String(email).toLowerCase(),
      company,
      service,
      message,
      phone,
      fileUrl,
    });

    // Try sending email but don't fail request if email fails
    try {
      await sendNewRequestEmail(savedRequest, savedRequest.fileUrl);
    } catch (emailErr) {
      console.error("❌ Email sending failed:", {
        error: emailErr,
        requestId: savedRequest._id,
        userId: savedRequest.user,
        service: savedRequest.service,
        company: savedRequest.company,
      });
    }

    return res.status(201).json({
      message: req.__("requests.submitted"),
      data: savedRequest,
    });
  } catch (err) {
    if (next) return next(err);
    return res.status(500).json({ message: req.__("requests.server_error") });
  }
};

/**
 * Get all service requests (Admin only)
 */
export const getRequests = async (req, res, next) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 });

    return res.json({
      message: req.__("requests.fetched"),
      count: requests.length,
      data: requests,
    });
  } catch (err) {
    if (next) return next(err);
    return res.status(500).json({ message: req.__("requests.server_error") });
  }
};

/**
 * Update request status (Admin only)
 */
export const updateRequestStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["pending", "in-progress", "completed"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        message: req.__("requests.status_invalid", {
          statuses: validStatuses.join(", "),
        }),
      });
    }

    const updatedRequest = await Request.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ message: req.__("requests.not_found") });
    }

    return res.json({
      message: req.__("requests.status_updated"),
      data: updatedRequest,
    });
  } catch (err) {
    if (next) return next(err);
    return res.status(500).json({ message: req.__("requests.server_error") });
  }
};
