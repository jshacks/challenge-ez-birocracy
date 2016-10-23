'use strict';

angular.module('jsHaksApp')
  .controller('CheckpointsCtrl', function ($scope, $http, socket, mainService,  $timeout) {
    var vm = this;

    vm.completeTask = completeTask;

    vm.documentDetails = mainService.getLocalDetails();
    ////////

    function completeTask(checkPoint) {
        checkPoint.completed = true;
    }

    $timeout (function () {
      $scope.showSpinner = true;
    }, 800);


  });
