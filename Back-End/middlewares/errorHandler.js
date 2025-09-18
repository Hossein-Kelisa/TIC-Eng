const errorHandler = (err, req, res, next) => {
//  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  console.error("❌ Error:", err);

  res.status(statusCode).json({
    status,
    message: err.message || "Something went wrong!",
    //just show stack in development
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default errorHandler;
