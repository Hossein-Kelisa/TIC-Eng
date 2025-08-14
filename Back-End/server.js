const express = require('express');
const dotenv = require('dotenv');
// const cors = require('cors');
const connectDB = require('./config/connectDB');


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
// app.use(cors());
app.use(express.json());

// Import routes
// const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');


// Use routes
// app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
