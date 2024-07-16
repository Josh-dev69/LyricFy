const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.route");

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
