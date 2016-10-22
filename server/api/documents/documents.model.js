'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DocumentsSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Documents', DocumentsSchema);