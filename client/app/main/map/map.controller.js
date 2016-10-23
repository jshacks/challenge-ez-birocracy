'use strict';

angular.module('jsHaksApp')
  .controller('mapCtrl', function ($scope, $http, $window, mainService) {
    var vm = this;
    var map;
    var startingMarker;
    var service;
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var request = {radius: '1000'};
    var docs = mainService.getLocalDetails()[0].documents;
    var checkpoints = [];

    vm.initialize = function(){
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(44.4482678, 26.0452267),
      });

      startingMarker = new google.maps.Marker({
        title:"Start point"
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          startingMarker.setPosition(pos);
          map.setCenter(pos);
          startingMarker.setMap(map);

          request.location =  {lat: startingMarker.getPosition().lat(), lng: startingMarker.getPosition().lng()};
          request.type = 'post_office';

          service = new google.maps.places.PlacesService(map);
          service.nearbySearch(request, callback);

        }, function() {
          handleLocationError(true, startingMarker, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, startingMarker, map.getCenter());
      }

      function handleLocationError(browserHasGeolocation, startingMarker, pos) {
        startingMarker.setPosition(pos);
        startingMarker.setContent(browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.');
      }

      google.maps.event.addListener(map, 'click', function(event) {
        startingMarker.setPosition(event.latLng);
        checkpoints=[];
        var waypointType = docs[1].location[0].type;

        request.location =  {lat: startingMarker.getPosition().lat(), lng: startingMarker.getPosition().lng()};
        request.type = waypointType;
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
      });
    }

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
          if(results.length > 0){
            checkpoints.push(results[0]);

            request.location =  {lat: checkpoints[0].geometry.location.lat(), lng: checkpoints[0].geometry.location.lng()};
            request.type = docs[2].location[0].type;
            service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, pushCheckpoint);
          }
      }
    }

    function pushCheckpoint(results, status){
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        checkpoints.push(results[0]);
      }
    }
  });
