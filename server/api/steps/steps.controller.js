'use strict';

var _ = require('lodash');
var Steps = require('./steps.model');

// Get list of steps
exports.index = function(req, res) {
  Steps.find()
    .populate('location')
    .exec(function (err, steps) {
      if (err) {
        return handleError(res, err);
      }
      return res.json(200, steps);
    });
};

// Get a single steps
exports.show = function(req, res) {
  Steps.findById(req.params.id)
    .populate('location')
    .exec(function (err, steps) {
    if(err) { return handleError(res, err); }
    if(!steps) { return res.send(404); }
    return res.json(steps);
  });
};

// Creates a new steps in the DB.
exports.create = function(req, res) {
  Steps.create(req.body, function(err, steps) {
    if(err) { return handleError(res, err); }
    return res.json(201, steps);
  });
};

// Updates an existing steps in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Steps.findById(req.params.id, function (err, steps) {
    if (err) { return handleError(res, err); }
    if(!steps) { return res.send(404); }
    var updated = _.merge(steps, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, steps);
    });
  });
};

// Deletes a steps from the DB.
exports.destroy = function(req, res) {
  Steps.findById(req.params.id, function (err, steps) {
    if(err) { return handleError(res, err); }
    if(!steps) { return res.send(404); }
    steps.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
