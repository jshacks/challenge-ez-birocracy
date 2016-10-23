'use strict';

var User = require('../api/user/user.model');

exports.createUsers = function () {
  User.find({}).remove();

  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function () {
    console.log('finished populating users');
  });
};
