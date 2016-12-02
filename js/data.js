/**
* Created by SpinyNorman on 02/12/2016.
*/
var app = app || {};

//Provide initial location data
app.initialLocations = function() {
    this.data = [
        {
            "id": 1,
            "name": "Roomtailors Headquarter",
            "lat": 48.739626,
            "long": 9.098718,
            "description": "Das Hauptquartier des besten Unternehmens der Welt."
        },
        {
            "id": 2,
            "name": "Fraunhofer institute",
            "lat": 48.740147,
            "long": 9.096008,
            "description": "Das Naherholungsgebiet des besten Unternehmens der Welt"
        },
        {
            "id": 3,
            "name": "High School Lib",
            "lat": 48.741140,
            "long": 9.102013,
            "description": "Good place for a nap"
        }
    ];

    return this.data;
};

app.markerList = [];