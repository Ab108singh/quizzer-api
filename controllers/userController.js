// controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
exports.register = async (req, res, next) => {
  try {
    console.log("hii");
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    console.log("hii1");
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '10d' });
    res.json({ user,token });
  } catch (error) {
    next(error);
  }
};
exports.varify = async (req, res, next) => {
  try {
    let token = req.headers.token;
    
    let {userId} =jwt.verify(token,process.env.JWT_SECRET);
    let user = await User.findById(userId);
    res.json({user})
  } catch (error) {
    next(error);
  }
};
