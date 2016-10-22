'use strict';

angular.module('jsHaksApp')
  .controller('OptionsCtrl', function ($scope, $http, socket, OptionsService) {
    var vm = this;

    vm.test = OptionsService.getDocumentOptions();

    vm.documents;
    vm.documents.selected;
  });
