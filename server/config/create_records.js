'use strict';

var Record = require('../api/records/records.model');
var CreateDocuments = require('./create_documents');
var CreateSteps = require('./create_steps');

exports.createReports = function () {
  Record.find({}).remove(function () {
  });

  Record.create({
    name: 'Cazier',
    label: 'Eliberare cazier',
    documents: [CreateDocuments.id._id, CreateDocuments.receipt._id, CreateDocuments.application_form._id],
    steps: [CreateSteps.step1._id, CreateSteps.step2._id]
  });
};
