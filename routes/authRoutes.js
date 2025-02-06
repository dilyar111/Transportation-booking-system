const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Render Signup Page
router.get('/signup', (req, res) => {
    res.render('signup'); // Renders the signup.hbs template
});

// Signup Route (Handles form submission)
router.post('/signup', authController.signup);

// Login Route (Not implemented yet)
router.post('/login', authController.login);

module.exports = router;
