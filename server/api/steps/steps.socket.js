/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Steps = require('./steps.model');

exports.register = function(socket) {
  Steps.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Steps.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('steps:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('steps:remove', doc);
}