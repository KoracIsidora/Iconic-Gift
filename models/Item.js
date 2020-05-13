const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  picture: {
    data: Buffer,
    contentType: String
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
