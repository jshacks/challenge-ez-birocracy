'use strict';

angular.module('jsHaksApp')
  .controller('mapCtrl', function ($scope, $http, $window) {
    var vm = this;
    var map;
    var geocoder;
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    function initialize() {
      geocoder = new google.maps.Geocoder();

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: new google.maps.LatLng(44.4482678, 26.0452267),
      });
      directionsDisplay.setMap(map);
    }
    initialize();
  });
