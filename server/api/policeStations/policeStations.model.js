'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PoliceStationsSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('PoliceStations', PoliceStationsSchema);