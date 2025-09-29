import sgMail from "@sendgrid/mail";
import { getObjectBuffer } from "./s3Download.js";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// Set SendGrid API key from .env
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Extract S3 key from public URL
function extractS3KeyFromUrl(urlString) {
  const bucketHost = `${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`;
  if (typeof urlString !== "string" || !urlString.includes(bucketHost))
    return null;
  const parts = urlString.split(`${bucketHost}/`);
  if (!parts[1]) return null;
  const key = parts[1].split(/[?#]/)[0].trim();
  return key.length > 0 ? key : null;
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
          content: fileBuffer.toString("base64"),
          filename: path.basename(key) || "attachment.pdf",
          type: "application/pdf",
          disposition: "attachment",
        });
      }
    }

    const msg = {
      to: process.env.MAIL_TO,
      from: process.env.MAIL_FROM,
      subject: `📩 New service request from ${savedRequest.firstName} ${savedRequest.lastName}`,
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

    const info = await sgMail.send(msg);
    console.log("✅ Email sent:", info[0].statusCode);
  } catch (err) {
    if (err.response) {
      console.error("❌ SendGrid error response:", err.response.body);
    } else {
      console.error("❌ Error sending email:", err.message);
    }
  }
}
