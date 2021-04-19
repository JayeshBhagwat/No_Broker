const mongoose = require('mongoose');


const { Schema } = mongoose;

const RecordSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  addressOne: String,
  addressTwo: String,
  country: String,
  state: String,
  zip: String,
  items: [{type: Schema.Types.ObjectId, ref: 'Location'}],
  date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Record', RecordSchema);
