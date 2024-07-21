const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.route");
const cors = require("cors");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// MONGODB Connection
connectDB();

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errStatus = err.status || "error";

  res.status(statusCode).json({
    status: errStatus,
    message: err.message,
  });
});

// SERVER
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
