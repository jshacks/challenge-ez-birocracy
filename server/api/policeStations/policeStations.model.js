'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PoliceStationsSchema = new Schema({
  name: String,
  address: String,
  location: {
    lat: Number,
    lng: Number
  }
});

module.exports = mongoose.model('PoliceStations', PoliceStationsSchema);
