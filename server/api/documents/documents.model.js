'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Locations = require('../locations/locations.model');

var DocumentsSchema = new Schema({
  name: String,
  info: String,
  location: [Locations]
});

module.exports = mongoose.model('Documents', DocumentsSchema);
