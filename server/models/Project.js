const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  businessProblem: {
    type: String,
    required: true,
  },
  technicalSolution: [
    {
      type: String,
    },
  ],
  results: [
    {
      metric: String,
      value: String,
      description: String,
    },
  ],
  technologies: [
    {
      type: String,
    },
  ],
  link: String,
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);
