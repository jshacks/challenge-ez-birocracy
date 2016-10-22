'use strict';

angular
    .module('jsHaksApp')
  .factory('OptionsService', OptionsService);

function OptionsService() {
    var service = {
        getDocumentOptions: getDocumentOptions
    };

    return service;

    ////////////

    function getDocumentOptions() {
        return 'hello';
    }

}
