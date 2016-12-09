/**
 * Created by SpinyNorman on 25/11/2016.
 */
// allows rendering of the list
// update lists based on search terms
// implements event listener (input, select/toggle, infoWindow

var app = app || {};

MapView = function () {
    'use strict'

    //Initiative location list
    self.locationList = ko.observableArray(app.data);

    //Create a map marker for each location
    self.locationList().map(function(location) {
        location.marker = new app.Marker(location)
    })

    //Value of filter parameters
    self.locationFilter = ko.observable();

    //Index of currently selected location
    self.selectedLocation = ko.observableArray([]);

    //List of filtered locations
    self.displayLocations = ko.computed(function () {

        //No filter set
        if (!self.locationFilter()) {

            //Show all markers
            self.locationList().map(function(location) {
                location.marker.setVisible(true)
            })

            //Return filtered list
            return self.locationList();

        //Filter set
        } else {

            //Return filtered array
            return ko.utils.arrayFilter(self.locationList(), function (location) {

                //Prepare comparison strings
                var string = location.name.toLowerCase();
                var searchString = self.locationFilter().toLowerCase();

                //Match strings
                var match = string.indexOf(searchString) === -1 ? false : true;

                //Show/hide marker on map
                if (match) {
                    location.marker.setVisible(true);
                } else {
                    location.marker.setVisible(false);
                }

                //Return true if search has found the string
                return match;
            });
        }
    });

    //Change value of currently selected location
    self.selectLocation = function (newLocation) {
        //Change selected location to new location
        newLocation.marker.markerClicked()
    };

};

app.MapView = new MapView();