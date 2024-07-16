const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, username, password } = req.body;

    if (!firstName || !lastName || !email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user instance
    const newUser = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
    });

    // Save user to database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  signup,
};
