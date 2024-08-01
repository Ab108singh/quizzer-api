// models/Quiz.js
const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      questionText: { type: String, required: true },
      options: [{ type: String, required: true }],
      correct: { type: Number, required: true }
    }
  ],
  timeLimit: { type: Number, required: true }, // Time limit in minutes
  createdAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
