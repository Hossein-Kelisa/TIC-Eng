// utils/s3Download.js
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "./s3.js"; // adjust path if needed

export async function getObjectBuffer(key) {
  const cmd = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
  });

  const res = await s3.send(cmd);
  const stream = res.Body;

  if (!stream) throw new Error("S3 object has no body");

  // If stream is async iterable (Node 18+), use for-await
  if (typeof stream[Symbol.asyncIterator] === "function") {
    const chunks = [];
    for await (const chunk of stream) chunks.push(Buffer.from(chunk));
    return Buffer.concat(chunks);
  }

  // Fallback for streams that are not async iterable
  return await new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  });
}
