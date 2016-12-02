/**
 * Created by SpinyNorman on 25/11/2016.
 */
// allows rendering of the list
// update lists based on search terms
// implements event listener (input, select/toggle, infoWindow

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

(function () {
    MapView = new function () {
        'use strict'

        var self = this;

        //Initiative location list
        self.locationList = ko.observableArray([]);

        //Value of filter parameters
        self.locationFilter = ko.observable();

        //Index of currently selected location
        self.selectedLocation = ko.observableArray([]);

        //Populate location list with model data
        app.initialLocations().forEach(function (item) {
            self.locationList.push(new Location(item));
        });

        //Observe list of markers
        self.markers = ko.observableArray([]);


        //List of filtered locations
        self.displayLocations = ko.computed(function () {
            if (!self.locationFilter()) {
                return self.locationList();
            } else {
                return ko.utils.arrayFilter(self.locationList(), function (location) {
                    var string = location.name().toLowerCase();
                    var searchString = self.locationFilter().toLowerCase();

                    var match = string.indexOf(searchString);

                    //Return true if search has found the string
                    return match === -1 ? false : true;
                });
            }
        });

        //Change value of currently selected location
        self.selectLocation = function (newLocation) {
            //Change selected location to new location
            self.selectedLocation(newLocation);
        };

        //Map marker
        self.mapMarker = ko.computed(function() {
            if (!self.displayLocations() || !app.map) {
                return "";
            } else {
                //Remove current markers from map
                app.Markers.clearMarkers();

                //Add new markers
                _.forEach(self.displayLocations(), function(location){
                    app.Markers.addMarker({lat: location.lat(), lng: location.long()});

                });
            }
        });


    };

    app.MapView = MapView;

})();