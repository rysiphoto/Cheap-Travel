const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TravelSchema = new Schema({
  author: { type: String, required: true },
  body: { type: String, required: true },
  price: Number,
  depCity: { type: String, required: true },
  arrCity: { type: String, required: true },
  date: { type: Date, default: Date.now }

});

const Travel = mongoose.model("Travel", TravelSchema);

module.exports = Travel;
