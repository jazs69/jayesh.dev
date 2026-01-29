const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Email transporter (Nodemailer)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Routes
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Portfolio API is running",
    timestamp: new Date().toISOString(),
  });
});

// Contact Form Endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, company, message, projectType } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required",
      });
    }

    // Save to database (optional)
    const Contact = require("./models/Contact");
    const contact = new Contact({
      name,
      email,
      company,
      message,
      projectType,
      createdAt: new Date(),
    });
    await contact.save();

    // Send email notification
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Project Type:</strong> ${projectType || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Received at ${new Date().toLocaleString()}</small></p>
      `,
    });

    res.json({
      success: true,
      message:
        "Message sent successfully! I'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again.",
    });
  }
});

// Projects API
app.get("/api/projects", async (req, res) => {
  try {
    const Project = require("./models/Project");
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ success: true, data: projects });
  } catch (error) {
    console.error("Projects fetch error:", error);
    res.status(500).json({ success: false, error: "Failed to fetch projects" });
  }
});

// Testimonials API
app.get("/api/testimonials", async (req, res) => {
  try {
    const Testimonial = require("./models/Testimonial");
    const testimonials = await Testimonial.find({ approved: true }).sort({
      createdAt: -1,
    });
    res.json({ success: true, data: testimonials });
  } catch (error) {
    console.error("Testimonials fetch error:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch testimonials" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err.stack);
  res.status(500).json({
    success: false,
    error: "Something went wrong on the server",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email configured: ${process.env.EMAIL_USER}`);
});

module.exports = app;
