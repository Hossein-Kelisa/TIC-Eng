const errorHandler = (err, req, res, next) => {
  // اگر statusCode نداره، بذاریم 500
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  console.error("❌ Error:", err);

  res.status(statusCode).json({
    status,
    message: err.message || "Something went wrong!",
    // فقط در حالت توسعه stack رو نشون بده
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default errorHandler;
