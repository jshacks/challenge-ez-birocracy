'use strict';

var _ = require('lodash');
var Locations = require('./locations.model');

// Get list of locationss
exports.index = function(req, res) {
  Locations.find(function (err, locationss) {
    if(err) { return handleError(res, err); }
    return res.json(200, locationss);
  });
};

// Get a single locations
exports.show = function(req, res) {
  Locations.findById(req.params.id, function (err, locations) {
    if(err) { return handleError(res, err); }
    if(!locations) { return res.send(404); }
    return res.json(locations);
  });
};

// Creates a new locations in the DB.
exports.create = function(req, res) {
  Locations.create(req.body, function(err, locations) {
    if(err) { return handleError(res, err); }
    return res.json(201, locations);
  });
};

// Updates an existing locations in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Locations.findById(req.params.id, function (err, locations) {
    if (err) { return handleError(res, err); }
    if(!locations) { return res.send(404); }
    var updated = _.merge(locations, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, locations);
    });
  });
};

// Deletes a locations from the DB.
exports.destroy = function(req, res) {
  Locations.findById(req.params.id, function (err, locations) {
    if(err) { return handleError(res, err); }
    if(!locations) { return res.send(404); }
    locations.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}