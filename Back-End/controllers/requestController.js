import Request from "../models/serviceRequest.js";

/**
 * Create a new service request
 * expects: name, email, company?, service, message?, phone, file (pdf)
 */
export const createRequest = async (req, res, next) => {
  try {
    const { firstName, lastName, email, company, service, message, phone } =
      req.body;

    // basic required fields
    if (!firstName || !lastName || !email || !service || !phone) {
      return res.status(400).json({
        message: "firstName, lastName, email, service, phone are required",
      });
    }

    // if file uploaded by multer
    const fileUrl = req.file
      ? `/uploads/forms/${req.file.filename}`
      : undefined;

    //save to database
    const doc = await Request.create({
      firstName,
      lastName,
      email: String(email).toLowerCase(),
      company,
      service,
      message,
      phone,
      fileUrl,
    });

    return res.status(201).json({
      message: "✅ Request submitted successfully!",
      data: doc,
    });
  } catch (err) {
    // pass to error handler if exists
    if (next) return next(err);
    return res.status(500).json({ message: "Server error" });
  }
};
