const mongoose = require('mongoose');


const { Schema } = mongoose;

const LocationSchema = new Schema({
  name: String,
  image: String,
  price: String,
  description: String,
});

module.exports = mongoose.model('Location', LocationSchema);
