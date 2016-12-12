var app = app || {};

MapView = function () {
    'use strict';

    //Initiative location list
    self.locationList = ko.observableArray(app.data);

    //Create a map marker for each location
    self.locationList().map(function(location) {
        location.marker = new app.Marker(location);
    });

    self.locationList.sort(self.sortByName);

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
                location.marker.setVisible(true);
            });

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
                location.marker.setVisible(match);

                //Return true if search has found the string
                return match;
            });
        }
    });

    //Change value of currently selected location
    self.selectLocation = function (newLocation) {
        //Change selected location to new location
        newLocation.marker.markerClicked();
    };

    self.sortByName = function (a,b){
      if(a.name<b.name){ // if price is observable
        return -1;
      } else if(a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    };

};

app.MapView = new MapView();