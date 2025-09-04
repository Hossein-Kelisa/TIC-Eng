import nodemailer from "nodemailer";
import { env } from "../config/env.js";

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_SECURE, // true برای پورت 465
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

/**
 * ارسال ایمیل وقتی درخواست جدید ثبت شد
 * @param {Object} data - اطلاعات فرم
 * @param {String} filePath - مسیر فایل آپلود شده (اختیاری)
 */
export const sendNewRequestEmail = async (data, filePath) => {
  const { firstName, lastName, email, company, service, phone, message } = data;

  const mailOptions = {
    from: env.MAIL_FROM,
    to: env.MAIL_TO,
    subject: `📩 New Service Request from ${firstName} ${lastName}`,
    text: `
New service request received:

- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone}
- Company: ${company || "N/A"}
- Service: ${service}
- Message: ${message || "N/A"}
    `,
    attachments: filePath
      ? [
          {
            filename: filePath.split("/").pop(),
            path: filePath,
          },
        ]
      : [],
  };

  await transporter.sendMail(mailOptions);
};
