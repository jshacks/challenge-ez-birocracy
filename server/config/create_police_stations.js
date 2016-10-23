'use strict';

var PoliceStation = require('../api/policeStations/policeStations.model');

exports.createPoliceStations = function () {
  PoliceStation.find({}).remove();

  PoliceStation.create({
      "name": "Sectia de politie 1",
      "address": "Bd. Lascar Catargiu nr. 22",
      "location": {
        "lat": 44.4489046,
        "lng": 26.0912177
      }
    },
    {
      "name": "Sectia de politie 2",
      "address": "Str. Arhitect Ion Mincu, nr. 15",
      "location": {
        "lat": 44.4589572,
        "lng": 26.0797345
      }
    },
    {
      "name": "Sectia de politie 3",
      "address": "Str. General Berthelot, nr. 34",
      "location": {
        "lat": 44.4411571,
        "lng": 26.0859724
      }
    },
    {
      "name": "Sectia de politie 4",
      "address": "Str. Ion Neculce, nr. 6",
      "location": {
        "lat": 44.455728,
        "lng": 26.0704033
      }
    },
    {
      "name": "Sectia de politie 5",
      "address": "Bd. Bucurestii Noi, nr. 54",
      "location": {
        "lat": 44.4825611,
        "lng": 26.0390235
      }
    },
    {
      "name": "Sectia de politie 6",
      "address": "Str. Paul Greceanu, nr. 36",
      "location": {
        "lat": 44.4516154,
        "lng": 26.1023991
      }
    },
    {
      "name": "Sectia de politie 7",
      "address": "Str. Teiul Doamnei, nr. 3",
      "location": {
        "lat": 44.4574075,
        "lng": 26.1265243
      }
    },
    {
      "name": "Sectia de politie 8",
      "address": "Sos. Mihai Bravu, nr. 137",
      "location": {
        "lat": 44.438571,
        "lng": 26.1335813
      }
    },
    {
      "name": "Sectia de politie 9",
      "address": "Sos. Pantelimon, nr. 290",
      "location": {
        "lat": 44.4421877,
        "lng": 26.1620616
      }
    },
    {
      "name": "Sectia de politie 10",
      "address": "Str. Stelea Spatarul, nr. 13-15",
      "location": {
        "lat": 44.431543,
        "lng": 26.1051833
      }
    },
    {
      "name": "Sectia de politie 11",
      "address": "Calea Vitan, nr. 43",
      "location": {
        "lat": 44.4156771,
        "lng": 26.1294761
      }
    },
    {
      "name": "Sectia de politie 12",
      "address": "Str. Prof. St. S. Nicolau, nr. 2",
      "location": {
        "lat": 44.4259903,
        "lng": 26.1386288
      }
    },
    {
      "name": "Sectia de politie 13",
      "address": "Str. Ciucea, nr. 2",
      "location": {
        "lat": 44.4159852,
        "lng": 26.1739133
      }
    },
    {
      "name": "Sectia de politie 14",
      "address": "Str. Oitelor, nr. 10",
      "location": {
        "lat": 44.4232004,
        "lng": 26.1031977
      }
    },
    {
      "name": "Sectia de politie 15",
      "address": "Str. Emil Racovita, nr. 2",
      "location": {
        "lat": 44.3877553,
        "lng": 26.1166529
      }
    },
    {
      "name": "Sectia de politie 16",
      "address": "Str. Stoian Militaru, nr. 103",
      "location": {
        "lat": 44.394486,
        "lng": 26.0960093
      }
    },
    {
      "name": "Sectia de politie 17",
      "address": "Str. Grigore Taranu, nr. 10",
      "location": {
        "lat": 44.433662,
        "lng": 26.0681133
      }
    },
    {
      "name": "Sectia de politie 18",
      "address": "Str. Constantin Miculescu, nr. 14-16",
      "location": {
        "lat": 44.416389,
        "lng": 26.0852253
      }
    },
    {
      "name": "Sectia de politie 19",
      "address": "Str. Amurgului, nr. 17",
      "location": {
        "lat": 44.4050927,
        "lng": 26.0628165
      }
    },
    {
      "name": "Sectia de politie 20",
      "address": "Str. George Mihail Zamfirescu, nr. 52",
      "location": {
        "lat": 44.452711,
        "lng": 26.0482802
      }
    },
    {
      "name": "Sectia de politie 21",
      "address": "Str. Dezrobirii, nr. 37",
      "location": {
        "lat": 44.4389552,
        "lng": 26.0218925
      }
    },
    {
      "name": "Sectia de politie 22",
      "address": "Str. Brasov, nr. 19",
      "location": {
        "lat": 44.423947,
        "lng": 26.0330223
      }
    },
    {
      "name": "Sectia de politie 23",
      "address": "Str. Rodnei, nr. 52",
      "location": {
        "lat": 44.4266346,
        "lng": 26.1969731
      }
    },
    {
      "name": "Sectia de politie 24",
      "address": "Str. Bazaltului, nr. 17",
      "location": {
        "lat": 44.3964055,
        "lng": 26.0909855
      }
    },
    {
      "name": "Sectia de politie 25",
      "address": "Str.Aleea Callatis,nr. 1A,sector 6",
      "location": {
        "lat": 44.4143846,
        "lng": 26.0214138
      }
    },
    {
      "name": "Sectia de politie 26",
      "address": "Bulevardul Metalurgiei nr. 89",
      "location": {
        "lat": 44.3697469,
        "lng": 26.1369793
      }
    })
};
