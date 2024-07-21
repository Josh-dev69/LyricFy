const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const createError = require("../utils/error.js");
const jwt = require("jsonwebtoken");

// Register
exports.signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, username, password } = req.body;

    // Check for empty field
    if (!firstName || !lastName || !email || !username || !password) {
      return next(new createError(400, "All fields are required"));
    }

    // Check if the user already exists
    const existingUserByEmail = await User.findOne({ email });
    const existingUserByUsername = await User.findOne({ username });

    if (existingUserByEmail || existingUserByUsername) {
      return next(new createError("User already exists!"));
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
    });

    // Save the user
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "90d",
    });

    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      token,
      user: {
        _id: newUser._id,
        name: newUser.firstName + " " + newUser.lastName,
        email: newUser.email,
        username: newUser.username,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Login
exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Check for empty fields
    if (!email || !password) {
      return next(new createError("All fields are required", 400));
    }
    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return next(new createError("Invalid email or password", 400));
    }

    // Check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return next(new createError("Invalid email or password", 400));
    }

    // Generate a JWT token
    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "90d",
      }
    );

    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      token,
      user: {
        _id: user._id,
        name: user.firstName + " " + user.lastName,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    next(error);
  }
};
