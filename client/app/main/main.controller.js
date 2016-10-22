'use strict';

angular.module('jsHaksApp')
  .controller('MainCtrl', function ($scope, $http, socket, mainService) {
    $scope.awesomeThings = [];
    $scope.details = false;
    $scope.generate = generate;

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.document = {};
    $scope.documents = mainService.getDocumentOptions();

    ////////////

    function generate() {
        console.log('generate');
        $scope.details = true;
    }

  });
