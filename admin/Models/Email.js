const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
  },
  contactNumber: {
    type:Number ,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const FormData = mongoose.model('FormData', formDataSchema);
module.exports=FormData