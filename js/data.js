/**
* Created by SpinyNorman on 02/12/2016.
*/
var app = app || {};

//Provide initial location data
app.initialLocations = function() {
    this.data = []

    this.loadJSON = function (path)
    {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log(JSON.parse(xhr.responseText))
                    return JSON.parse(xhr.responseText);
                } else {
                    return {};
                }
            }
        };
        xhr.open("GET", path, true);
        xhr.send();
    }

    this.data = this.loadJSON('locations.json');
    console.log(this.data);
/*
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
        },

        {
            "id": 4,
            "name": "Commundo Tagungshotel",
            "lat": 48.746076,
            "long": 9.107849,
            "description": "Tagungshotel"
        },

        {
            "id": 5,
            "name": "Filderstadt",
            "lat": 48.692426,
            "long": 9.226620,
            "description": "Flughafen"
        },
        {
            "id": 6,
            "name": "Esslingen",
            "lat": 48.738101,
            "long": 9.315130,
            "description": "Best place to go for Weihnachtsmarkt."
        }

    ];*/
    return this.data;
};
app.initialLocations();
app.markerList = [];