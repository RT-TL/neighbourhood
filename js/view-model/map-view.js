/**
 * Created by SpinyNorman on 25/11/2016.
 */
// allows rendering of the list
// update lists based on search terms
// implements event listener (input, select/toggle, infoWindow

var app = app || {};

//(function () {
    MapView = function () {
        'use strict'

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

        //List of filtered locations
        self.displayLocations = ko.computed(function () {
            if (!self.locationFilter()) {

                //Show all markers
                app.markerList.map(function(marker){marker.setVisible(true)})

                //Return filtered list
                return self.locationList();

            } else {

                //Return filtered array
                return ko.utils.arrayFilter(self.locationList(), function (location) {

                    //Prepare comparison strings
                    var string = location.name().toLowerCase();
                    var searchString = self.locationFilter().toLowerCase();

                    //Match strings
                    var match = string.indexOf(searchString) === -1 ? false : true;

                    //Show/hide marker on map
                    if (match) {
                        app.MarkerView.markerList[location.id()].setVisible(true);
                    } else {
                        app.MarkerView.markerList[location.id()].setVisible(false);
                    }

                    //Return true if search has found the string
                    return match;
                });
            }
        });

        //Change value of currently selected location
        self.selectLocation = function (newLocation) {
            //Change selected location to new location
            var marker = app.MarkerView.markerList[newLocation.id()]
            app.MarkerView.markerClicked(marker)
        };




    };

    app.MapView = new MapView();

//});