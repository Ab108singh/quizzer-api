// routes/userRoutes.js
const express = require('express');
const { register, login, varify } = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/varify',varify);

module.exports = router;
