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
    vm.checkpoints = [];

    vm.initialize = function(){
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(44.4482678, 26.0452267),
      });

      directionsDisplay.setMap(map);
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

          vm.checkpoints=[];
          var waypointType = docs[1].location[0].type;

          request.location =  {lat: startingMarker.getPosition().lat(), lng: startingMarker.getPosition().lng()};
          request.type = waypointType;
          service = new google.maps.places.PlacesService(map);
          service.nearbySearch(request, function(results,status){
            if (status == google.maps.places.PlacesServiceStatus.OK) {
              if(results.length > 0){
                vm.checkpoints.push(results[0]);

                request.location =  {lat: vm.checkpoints[0].geometry.location.lat(), lng: vm.checkpoints[0].geometry.location.lng()};
                request.type = docs[2].location[0].type;
                service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, function(results,status){
                  if (status == google.maps.places.PlacesServiceStatus.OK) {
                    vm.checkpoints.push(results[0]);
                    calculateAndDisplayRoute(directionsService,directionsDisplay, vm.checkpoints);
                  }
                });
              }
            }
          });

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
        vm.checkpoints=[];
        var waypointType = docs[1].location[0].type;

        request.location =  {lat: startingMarker.getPosition().lat(), lng: startingMarker.getPosition().lng()};
        request.type = waypointType;
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function(results,status){
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            if(results.length > 0){
              vm.checkpoints.push(results[0]);

              request.location =  {lat: vm.checkpoints[0].geometry.location.lat(), lng: vm.checkpoints[0].geometry.location.lng()};
              request.type = docs[2].location[0].type;
              service = new google.maps.places.PlacesService(map);
              service.nearbySearch(request, function(results,status){
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                  vm.checkpoints.push(results[0]);
                  calculateAndDisplayRoute(directionsService,directionsDisplay, vm.checkpoints);
                }
              });
            }
          }
        });
      });
    }

    function calculateAndDisplayRoute(directionsService, directionsDisplay, checkpoints) {
      var waypoints = [];
      var transportType = mainService.getTransportType().type;
      var waypoint = new google.maps.LatLng(checkpoints[0].geometry.location.lat(),checkpoints[0].geometry.location.lng());
      waypoints.push({
        location: waypoint,
        stopover: true
      });
      directionsService.route({
        origin: new google.maps.LatLng(startingMarker.getPosition().lat(),startingMarker.getPosition().lng()),
        waypoints: waypoints,
        destination: new google.maps.LatLng(checkpoints[1].geometry.location.lat(), checkpoints[1].geometry.location.lng()),
        travelMode: transportType
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
  });
