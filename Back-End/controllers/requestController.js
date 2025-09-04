import Request from "../models/serviceRequest.js";
import { sendNewRequestEmail } from "../utils/email.js";
import path from "path";

/**
 * Create a new service request
 * expects: firstName, lastName, email, company?, service, message?, phone, file (pdf)
 */
export const createRequest = async (req, res, next) => {
  try {
    const { firstName, lastName, email, company, service, message, phone } = req.body;

    // ✅ check required fields
    if (!firstName || !lastName || !email || !service || !phone) {
      return res.status(400).json({
        message: "firstName, lastName, email, service, phone are required",
      });
    }

    // ✅ handle file upload
    const fileUrl = req.file ? `/uploads/forms/${req.file.filename}` : undefined;

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

    // ✅ send email notification (with attachment if file exists)
    const filePath = req.file ? path.resolve(`uploads/forms/${req.file.filename}`) : null;
    await sendNewRequestEmail(savedRequest, filePath);

    // ✅ return response
    return res.status(201).json({
      message: "✅ Request submitted successfully!",
      data: savedRequest,
    });
  } catch (err) {
    if (next) return next(err); // pass error to global handler
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