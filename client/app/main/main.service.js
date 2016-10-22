'use strict';

angular
    .module('jsHaksApp')
  .factory('mainService', mainService);

function mainService() {
     var documentsMock = [
        {name: 'Afghanistan', code: 'AF'},
        {name: 'Åland Islands', code: 'AX'},
        {name: 'Albania', code: 'AL'},
        {name: 'Algeria', code: 'DZ'},
        {name: 'American Samoa', code: 'AS'},
        {name: 'Andorra', code: 'AD'}
    ];

    var service = {
        getDocumentOptions: getDocumentOptions
    };

    return service;



    ////////////

    function getDocumentOptions() {
        return documentsMock;
    }

}
