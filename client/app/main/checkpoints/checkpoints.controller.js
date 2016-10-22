'use strict';

angular.module('jsHaksApp')
  .controller('CheckpointsCtrl', function ($scope, $http, socket, mainService) {
    var vm = this;

    vm.documentDetails = mainService.getLocalDetails();
    ////////



  });
