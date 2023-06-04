const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String
  },
});

const UserData = mongoose.model('User', userSchema);

module.exports = UserData;
