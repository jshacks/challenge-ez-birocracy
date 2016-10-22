'use strict';

angular.module('jsHaksApp')
  .controller('OptionsCtrl', function ($scope, $http, socket, OptionsService) {
    var vm = this;

    vm.document = {};
    vm.documents = OptionsService.getDocumentOptions();
    console.log('documents', vm.documents);
    ////////


  });
