import nodemailer from "nodemailer";
import { env } from "../config/env.js";
import path from "path";
import { getObjectBuffer } from "./s3Download.js"; // helper to download S3 file

// create transporter (SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// extract S3 key from public URL
function extractS3KeyFromUrl(urlString) {
  const bucketHost = `${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`;
  if (typeof urlString !== "string" || !urlString.includes(bucketHost)) {
    return null;
  }
  const parts = urlString.split(`${bucketHost}/`);
  if (parts.length < 2 || !parts[1] || parts[1].trim() === "") {
    return null;
  }
  // Optionally, remove any query string or fragment from the key
  const key = parts[1].split(/[?#]/)[0];
  return key;
}

/**
 * sendNewRequestEmail(savedRequest, fileUrl)
 * fileUrl must be an S3 URL (string)
 */
export async function sendNewRequestEmail(savedRequest, fileUrl) {
  try {
    const attachments = [];

    if (fileUrl) {
      const key = extractS3KeyFromUrl(fileUrl);
      if (key) {
        const fileBuffer = await getObjectBuffer(key);
        attachments.push({
          filename: path.basename(key) || "attachment.pdf",
          content: fileBuffer,
          contentType: "application/pdf",
        });
      }
    }

    const mailOptions = {
      from: process.env.MAIL_FROM, // ✅ matches .env
      to: process.env.MAIL_TO, // ✅ matches .env
      subject: `📩New service request from ${savedRequest.firstName} ${savedRequest.lastName}`,
      text: `New request: ${savedRequest.service}\n\nMessage: ${
        savedRequest.message || "-"
      }`,
      html: `
        <p>New request from <b>${savedRequest.firstName} ${
        savedRequest.lastName
      }</b></p>
        <p>Company: ${savedRequest.company || "-"}</p>
        <p>Service: ${savedRequest.service}</p>
        <p>Message: ${savedRequest.message || "-"}</p>
        <p>Phone: ${savedRequest.phone}</p>
        <p>Email: ${savedRequest.email}</p>
        ${
          fileUrl
            ? `<p>File: <a href="${fileUrl}" target="_blank">Download PDF</a></p>`
            : "<p>No file uploaded</p>"
        }
      `,
      attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
  } catch (err) {
    console.error("Error sending new request email:", err);
  }
}
