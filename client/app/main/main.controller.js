'use strict';

angular.module('jsHaksApp')
  .controller('MainCtrl', function ($scope, $http, socket, mainService, $modal) {
    $scope.awesomeThings = [];
    $scope.details = false;
    $scope.openModal = openModal;

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
    $scope.document.selected = {};
    $scope.documents = mainService.getDocumentOptions();

    $scope.$watch('document.selected', function(newValue, oldValue){
        console.log(newValue, oldValue);
        if(newValue != oldValue) {
            openModal();
        }
    });
    ////////////

    function openModal() {
        console.log('openModal');
        var modalInstance = $modal.open({
          animation: true,
          ariaLabelledBy: 'modal-title-bottom',
          ariaDescribedBy: 'modal-body-bottom',
          templateUrl: 'app/main/main.modal.html',
          size: 'sm',
          controller: function($scope) {
            $scope.selectTransport = selectTransport;
            $scope.transport = [
                {
                    label: 'Mers',
                    type: 'WALKING'
                },
                {
                    label: 'Masina',
                    type: 'DRIVING'
                },

                {
                    label: 'Bicicleta',
                    type: 'BICYCLING'
                },
            ]
            ////////

            function selectTransport (type) {
                mainService.setTransportType(type);
                console.log('tip',mainService.getTransportType('transportType'));
            }
          }
        });
        modalInstance.result.then(function () {
        }, function () {
            $scope.details = true
        console.log('$scope.details', $scope.details);
        });
    }

  });
