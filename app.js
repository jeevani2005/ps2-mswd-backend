const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Initialize the app
const app = express();

// Middleware
app.use(express.json());  // Parse JSON body
app.use(cors());  // Enable CORS
app.use(helmet());  // Enhance API security

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
