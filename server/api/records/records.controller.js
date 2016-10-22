'use strict';

var _ = require('lodash');
var Records = require('./records.model');

// Get list of recordss
exports.index = function(req, res) {
  Records.find(function (err, recordss) {
    if(err) { return handleError(res, err); }
    return res.json(200, recordss);
  });
};

// Get a single records
exports.show = function(req, res) {
  Records.findById(req.params.id, function (err, records) {
    if(err) { return handleError(res, err); }
    if(!records) { return res.send(404); }
    return res.json(records);
  });
};

// Creates a new records in the DB.
exports.create = function(req, res) {
  Records.create(req.body, function(err, records) {
    if(err) { return handleError(res, err); }
    return res.json(201, records);
  });
};

// Updates an existing records in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Records.findById(req.params.id, function (err, records) {
    if (err) { return handleError(res, err); }
    if(!records) { return res.send(404); }
    var updated = _.merge(records, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, records);
    });
  });
};

// Deletes a records from the DB.
exports.destroy = function(req, res) {
  Records.findById(req.params.id, function (err, records) {
    if(err) { return handleError(res, err); }
    if(!records) { return res.send(404); }
    records.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}