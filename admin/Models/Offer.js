const mongoose = require('mongoose');

const offerImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('OfferImage', offerImageSchema);
