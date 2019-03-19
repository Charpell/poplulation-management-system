const mongoose = require('mongoose');


const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    allowNull: false,
    trim: true
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
  population: {
    male: {
      type: Number,
      default: 0
    },
    female: {
      type: Number,
      default: 0
    }
  },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }]
});


module.exports = mongoose.model('Location', locationSchema);