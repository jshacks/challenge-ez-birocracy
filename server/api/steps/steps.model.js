'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Locations = require('../locations/locations.model');

var StepsSchema = new Schema({
  name: String,
  info: String,
  completed: Boolean,
  location: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Locations'
  }]
});

module.exports = mongoose.model('Steps', StepsSchema);
