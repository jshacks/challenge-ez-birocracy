'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LocationsSchema = new Schema({
  name: String,
  type: String
});

module.exports = mongoose.model('Locations', LocationsSchema);
