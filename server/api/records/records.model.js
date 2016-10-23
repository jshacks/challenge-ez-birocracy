'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Documents = require('../documents/documents.model');
var Steps = require('../steps/steps.model');

var RecordsSchema = new Schema({
  name: String,
  label: String,
  documents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Documents'
      }
    ],
  steps: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Steps'
    }
  ]
});

module.exports = mongoose.model('Records', RecordsSchema);
