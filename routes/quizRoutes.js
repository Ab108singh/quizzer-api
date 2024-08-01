// routes/quizRoutes.js
const express = require('express');
const { createQuiz, getAllQuizzes, getQuizById, deleteQuiz } = require('../controllers/quizController');

const router = express.Router();

router.post('/', createQuiz);
router.get('/', getAllQuizzes);
router.get('/:id', getQuizById);
router.delete('/:id', deleteQuiz);

module.exports = router;
