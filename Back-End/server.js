const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const connectDB = require('./config/connectDB');
connectDB(); // Connect to MongoDB

const app = require('./app'); // Import the app setup

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
