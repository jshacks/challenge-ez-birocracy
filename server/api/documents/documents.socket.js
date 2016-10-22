/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Documents = require('./documents.model');

exports.register = function(socket) {
  Documents.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Documents.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('documents:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('documents:remove', doc);
}