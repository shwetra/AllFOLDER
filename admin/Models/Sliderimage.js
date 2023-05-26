const mongoose = require('mongoose');

const sliderImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }
});

const SliderImage = mongoose.model('SliderImage', sliderImageSchema);

module.exports = SliderImage;
