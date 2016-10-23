'use strict';

var CreateLocations = require('./create_locations');
var Document = require('../api/documents/documents.model');

Document.find({}).remove(function () {
});

exports.id = new Document({
  name: 'Act de identitate',
  info: 'Carte de identitate/Buletin de identitate/Pasaport',
  location: []
});
exports.id.save();

console.log(CreateLocations.post_office._id);


exports.receipt = new Document({
  name: 'Chitanta',
  info: 'Chitanta eliberata pentru plata serviciului in valoare de 10 lei',
  location: [CreateLocations.post_office._id, CreateLocations.treasury._id]
});
exports.receipt.save();

exports.application_form = new Document({
  name: 'Cerere tip',
  info: 'Cerere tip completata cu datele personale si motiv pentru eliberarea actului necesar',
  location: [CreateLocations.online._id, CreateLocations.police._id]
});
exports.application_form.save();
