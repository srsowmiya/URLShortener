const mongoose = require("mongoose");

async function connectDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Database connected successfully");
  } catch (err) {
    console.error(" Database connection failed:", err);
  }
}

module.exports = connectDB;
