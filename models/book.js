/* Purpose: This file creates the Book model/schema*/

//Require the Mongoos package
const mongoose = require("mongoose");
const reviewSchema = require('./review.js')

//Create a schema to define the properties of the book collection:

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  photo: { type: String, required: true },
  synopsis: { type: String, required: true },
  isBookOfMonth: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
  bomMonth: { type: String },
  bomYear: { type: String, minlength: 4, maxlength: 4 },
  //Only accepting values from reviews schema
  reviews: [reviewSchema]
});

//Export schema as a mongoose model
module.exports=mongoose.model('Book', bookSchema)