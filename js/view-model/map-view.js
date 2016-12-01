/**
 * Created by SpinyNorman on 25/11/2016.
 */
// allows rendering of the list
// update lists based on search terms
// implements event listener (input, select/toggle, infoWindow

var app = app || {};


(function () {
    MapView = new function () {
       // 'use strict'

        var self = this;

        //Initiative location list
        self.locationList = ko.observableArray([]);

        //Value of filter parameters
        self.locationFilter = ko.observable();

        //Index of currently selected location
        self.selectedLocation = ko.observableArray([]);

        //Populate location list with model data
        app.Controller.getLocations().forEach(function (item) {
            self.locationList.push(new Location(item));
        });

        //List of filtered locations
        self.displayLocations = ko.computed(function () {
            if (!self.locationFilter()) {
                return self.locationList();
            } else {
                return ko.utils.arrayFilter(self.locationList(), function (location) {
                    var string = location.name().toLowerCase();
                    var startsWith = self.locationFilter().toLowerCase();

                    string = string || "";
                    if (startsWith.length > string.length) {
                        return false;
                    }
                    return string.substring(0, startsWith.length) === startsWith;
                });
            }
        });

        //Change value of currently selected location
        self.selectLocation = function (newLocation) {
            console.log(self.locationFilter());

            //Change selected location to new location
            self.selectedLocation(newLocation);

            //Trigger map change

        };


        //Map marker

        self.mapMarker = ko.computed(function() {
            if (!self.displayLocations()) {
                return "";
            } else {
                _.forEach(self.displayLocations(), function(location){
                    new google.maps.Marker({
                        position: {lat: location.lat(), lng: location.long()},
                        map: map,
                        title: location.name()
                      });
                });
            }
        });


    };

    //Assign map view as view model
    app.MapView = MapView;
})();