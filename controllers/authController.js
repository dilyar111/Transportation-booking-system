const bcrypt = require('bcrypt');
const User = require('../models/User');  // Import the user model

// Handle User Signup
exports.signup = async (req, res) => {
    try {
        const { name, email, password, type, adminId } = req.body;

        // Check if all fields are provided
        if (!name || !email || !password || !type) {
            return res.status(400).send('Please provide all required fields.');
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('Email is already in use.');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            userType: type,
            adminId: type === 'admin' ? adminId : null // Only admins need adminId
        });

        // Save the user to the database
        await newUser.save();
        res.status(201).send('User created successfully!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Handle User Login (Not implemented yet)
exports.login = (req, res) => {
    // Handle login logic here
    res.send('Login functionality is not yet implemented.');
};
