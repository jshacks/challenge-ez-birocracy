'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'jshaks-secret',

  FACEBOOK_ID:      '1706203266366678',
  FACEBOOK_SECRET:  'fbc829483f17b6bb2e3d8bf005886ffc',

  GOOGLE_ID:        '144367993901-h7k2s4fc3t58997hbb3m5edh2l9es00a.apps.googleusercontent.com',
  GOOGLE_SECRET:    'vTOyZJa57RhOIWeorfYAmkhg',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
