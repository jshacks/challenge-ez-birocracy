/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Record = require('../api/records/records.model');
var Document = require('../api/documents/documents.model');
var Location = require('../api/locations/locations.model');
var Step = require('../api/steps/steps.model');

// var treasury = Location.create({
//   name: 'Trezorerie',
//   type: 'treasury'
// });
//
// var post_office = Location.create({
//   name: 'Posta Romana',
//   type: 'post_office'
// });
//
// var police = Location.create({
//   name: 'Sectia de politie',
//   type: 'police'
// });
//
// var online = Location.constructor({
//   name: 'Online',
//   type: 'online'
// });
//
// var id = Document.constructor({
//   name: 'Act de identitate',
//   info: 'Carte de identitate/Buletin de identitate/Pasaport',
//   location: []
// });
//
// var receipt = Document.constructor({
//   name: 'Chitanta',
//   info: 'Chitanta eliberata pentru plata serviciului in valoare de 10 lei',
//   location: [
//     treasury,
//     post_office
//   ]
// });
//
// var application_form = Document.constructor({
//   name: 'Cerere tip',
//   info: 'Cerere tip completata cu datele personale si motiv pentru eliberarea actului necesar',
//   location: [
//     online,
//     police
//   ]
// });
//
// var step1 = Step.constructor({
//   name: 'payment',
//   info: 'Plata serviciului in valoare de 10 lei si obtinerea chitantei.',
//   completed: false,
//   location: [
//     treasury,
//     post_office
//   ]
// });
//
// var step2 = Step.constructor({
//   name: 'form',
//   info: 'Predarea actelor necesare pentru obtinerea actului necesar',
//   completed: false,
//   location: [
//     police
//   ]
// });

Record.find({}).remove(function () {
  Record.create({
      name: 'Cazier',
      label: 'Eliberare cazier',
      steps: [
        step1,
        step2
      ]
    }, function (err, res) {
      if (err) {
        console.log(res, err);
      }
      console.log(res);
    }
  );
});

Thing.find({}).remove(function () {
  Thing.create({
    name: 'Development Tools',
    info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name: 'Server and Client integration',
    info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name: 'Smart Build System',
    info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  }, {
    name: 'Modular Structure',
    info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
  }, {
    name: 'Optimized Build',
    info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  }, {
    name: 'Deployment Ready',
    info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function () {
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
    }
  );
});
