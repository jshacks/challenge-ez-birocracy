'use strict';

var Location = require('../api/locations/locations.model');

Location.find({}).remove(function () {
});

exports.treasury = new Location({
  name: 'Trezorerie',
  type: 'treasury'
});
exports.treasury.save();

exports.post_office = new Location({
  name: 'Posta Romana',
  type: 'post_office'
});
exports.post_office.save();

exports.police = new Location({
  name: 'Sectia de politie',
  type: 'police'
});
exports.police.save();

exports.online = new Location({
  name: 'Online',
  type: 'online'
});
exports.online.save();
