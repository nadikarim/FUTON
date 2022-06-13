const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  description: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  photo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Animal', animalSchema);
