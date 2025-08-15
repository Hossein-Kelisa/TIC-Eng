const express = require('express');
const serviceRoutes = require('./routes/serviceRoutes');
const {errorHandler} = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(express.json());

// Import and use service routes
app.use('/api/services', serviceRoutes);

// Error handler (must be last middleware)
app.use(errorHandler);

module.exports = app;