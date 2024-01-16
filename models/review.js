/* Purpose: This file creates the Review model/schema*/
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },

  reviewTitle: {
    type: String,
  },

  review: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  dateAdded: { type: Date, default: Date.now },
});

module.exports = reviewSchema;
