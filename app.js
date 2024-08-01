// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const quizRoutes = require('./routes/quizRoutes');
const userRoutes = require('./routes/userRoutes');

const cors =require("cors")

dotenv.config();

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/quizzes', quizRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});



module.exports = app;
