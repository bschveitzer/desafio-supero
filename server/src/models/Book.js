const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  ISBN: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  author: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  publisher: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  dimension: {
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true }
  }
});

BookSchema.plugin(mongoosePaginate);

mongoose.model("Book", BookSchema);
