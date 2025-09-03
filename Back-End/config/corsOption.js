// config/corsOptions.js
const allowedOrigins = [
  "http://localhost:5173",
  "https://tic-eng.netlify.app",
  "https://tic-eng.com",
  "https://www.tic-eng.com",
];

export const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("CORS not allowed for this origin: " + origin));
  },
  credentials: true,
};
