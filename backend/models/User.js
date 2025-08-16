const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // Hash password in real app
});

module.exports = mongoose.model("User", userSchema);
