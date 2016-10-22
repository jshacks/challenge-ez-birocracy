/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Records = require('./records.model');

exports.register = function(socket) {
  Records.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Records.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('records:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('records:remove', doc);
}