'use strict';

var CreateLocations = require('./create_locations');
var Step = require('../api/steps/steps.model');

Step.find({}).remove(function () {
});

exports.step1 = new Step({
  name: 'payment',
  info: 'Plata serviciului in valoare de 10 lei si obtinerea chitantei.',
  completed: false,
  location: [CreateLocations.post_office._id, CreateLocations.treasury._id]
});
exports.step1.save();

exports.step2 = new Step({
  name: 'form',
  info: 'Predarea actelor necesare pentru obtinerea actului necesar',
  completed: false,
  location: [CreateLocations.police._id]
});
exports.step2.save();
