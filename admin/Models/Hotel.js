const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  url: {type: String, required: true},
  urlf: {type: String, required: true},
  urls: {type: String, required: true},
  urlt: {type: String, required: true},
  urll: {type: String, required: true},
  Name: {type: String, required: true},
  State: {type: String, required: true},
  Location: {type: String, required: true},
  Features: {type: String, required: true},
  Price: {type: Number, required: true},
  Other: {type: String},
  ExtraDetails: {type: String}
});

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;
