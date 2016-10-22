'use strict';

angular
    .module('jsHaksApp')
  .factory('mainService', mainService);

function mainService() {
     var documentsMock = [
        {
            name: 'Cazier',
            label: 'Elibarare Cazier',
            documents: [
                {
                    name: 'Act de identitate',
                    info: 'CI/BI/PASAPORT',
                    location: []
                },
                {
                    name: 'Chitanta',
                    info: 'Chitanta eliberata pentru plata serviciului in valoare de 10 RON',
                    location: [
                        {
                            name: 'Trezorerie',
                            type: 'Trezorerie'
                        },
                        {
                            name: 'Posta Romana',
                            type: 'post_office'
                        }
                    ]
                },
                {
                    name: 'Cerere tip',
                    info: 'Cerere pentru eliberarea cazierului',
                    location: [
                        {
                            name: 'Sectia de politie',
                            type: 'police'
                        },
                        {
                            name: 'Online',
                            type: 'download'
                        }
                    ]
                }
            ]
        }
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
