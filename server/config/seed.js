/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var CreateUsers = require('./create_users');
var CreateReports = require('./create_records');
var CreateThings = require('./create_things');
var CreatePoliceStations = require('./create_police_stations');

CreatePoliceStations.createPoliceStations();
CreateReports.createReports();
CreateThings.createThings();
CreateUsers.createUsers();

