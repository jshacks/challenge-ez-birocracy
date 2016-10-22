'use strict';

var _ = require('lodash');
var Documents = require('./documents.model');

// Get list of documentss
exports.index = function(req, res) {
  Documents.find(function (err, documentss) {
    if(err) { return handleError(res, err); }
    return res.json(200, documentss);
  });
};

// Get a single documents
exports.show = function(req, res) {
  Documents.findById(req.params.id, function (err, documents) {
    if(err) { return handleError(res, err); }
    if(!documents) { return res.send(404); }
    return res.json(documents);
  });
};

// Creates a new documents in the DB.
exports.create = function(req, res) {
  Documents.create(req.body, function(err, documents) {
    if(err) { return handleError(res, err); }
    return res.json(201, documents);
  });
};

// Updates an existing documents in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Documents.findById(req.params.id, function (err, documents) {
    if (err) { return handleError(res, err); }
    if(!documents) { return res.send(404); }
    var updated = _.merge(documents, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, documents);
    });
  });
};

// Deletes a documents from the DB.
exports.destroy = function(req, res) {
  Documents.findById(req.params.id, function (err, documents) {
    if(err) { return handleError(res, err); }
    if(!documents) { return res.send(404); }
    documents.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}