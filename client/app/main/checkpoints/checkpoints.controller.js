'use strict';

angular.module('jsHaksApp')
  .controller('CheckpointsCtrl', function ($scope, $http, socket, mainService) {
    var vm = this;

    vm.completeTask = completeTask;

    vm.documentDetails = mainService.getLocalDetails();
    ////////

    function completeTask(checkPoint) {
        checkPoint.completed = true;
    }

  });
