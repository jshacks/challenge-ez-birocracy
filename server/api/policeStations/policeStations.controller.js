'use strict';

var _ = require('lodash');
var PoliceStations = require('./policeStations.model');

// Get list of policeStationss
exports.index = function(req, res) {
  PoliceStations.find(function (err, policeStationss) {
    if(err) { return handleError(res, err); }
    return res.json(200, policeStationss);
  });
};

// Get a single policeStations
exports.show = function(req, res) {
  PoliceStations.findById(req.params.id, function (err, policeStations) {
    if(err) { return handleError(res, err); }
    if(!policeStations) { return res.send(404); }
    return res.json(policeStations);
  });
};

// Creates a new policeStations in the DB.
exports.create = function(req, res) {
  PoliceStations.create(req.body, function(err, policeStations) {
    if(err) { return handleError(res, err); }
    return res.json(201, policeStations);
  });
};

// Updates an existing policeStations in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  PoliceStations.findById(req.params.id, function (err, policeStations) {
    if (err) { return handleError(res, err); }
    if(!policeStations) { return res.send(404); }
    var updated = _.merge(policeStations, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, policeStations);
    });
  });
};

// Deletes a policeStations from the DB.
exports.destroy = function(req, res) {
  PoliceStations.findById(req.params.id, function (err, policeStations) {
    if(err) { return handleError(res, err); }
    if(!policeStations) { return res.send(404); }
    policeStations.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}