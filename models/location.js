const mongoose = require('mongoose')

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const locationSchema = new Schema({
  location: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  female: {
    type: Number,
    trim: true,
    required: true,
  },
  male: {
    type: Number,
    trim: true,
    required: true,
  },
  population: {
    type: Number,
    trim: true,
    required: true,
  }
});


const Location =  mongoose.model('Location', locationSchema);


module.exports = {
  Location
}
