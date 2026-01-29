const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  company: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    required: true,
  },
  projectType: {
    type: String,
    enum: [
      "Full-Stack Development",
      "SEO Optimization",
      "Performance Audit",
      "Consulting",
      "Other",
    ],
  },
  status: {
    type: String,
    enum: ["new", "read", "replied", "archived"],
    default: "new",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
