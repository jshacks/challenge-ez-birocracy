'use strict';

angular
    .module('jsHaksApp')
  .factory('mainService', mainService);

function mainService(localStorageService) {
     var documentsMock = [
        {
            name: 'Cazier',
            active: true,
            label: 'Eliberare Cazier',
            documents: [
                {
                    name: 'Act de identitate',
                    info: 'CI/BI/PASAPORT',
                    location: [],
                    completed: true
                },
                {
                    name: 'Chitanta',
                    info: 'Chitanta eliberata pentru plata serviciului in valoare de 10 RON',
                    location: [
                        {
                            name: 'Posta Romana',
                            type: 'post_office'
                        }
                    ],
                    completed: false
                },
                {
                    name: 'Cerere tip',
                    info: 'Cerere pentru eliberarea cazierului',
                    location: [
                        {
                            name: 'Sectia de politie',
                            type: 'police'
                        }
                    ],
                    completed: false
                }
            ]
        },
       {
          name: 'Buletin (unavailable)',
          active: false,
          label: 'Eliberare buletin',
          documents: []
       }
    ];

    var service = {
        getDocumentOptions: getDocumentOptions,
        getLocalDetails: getLocalDetails,
        setLocalDetails: setLocalDetails
    };

    return service;


    function getLocalDetails() {
        return localStorageService.get('documents');
    }

    function setLocalDetails(documents) {
        localStorageService.set('documents', documents);
    }
    ////////////

    function getDocumentOptions() {
        this.setLocalDetails(documentsMock);
        return documentsMock;

    }

}
