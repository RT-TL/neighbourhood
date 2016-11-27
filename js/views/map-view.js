/**
 * Created by SpinyNorman on 25/11/2016.
 */
// allows rendering of the list
// update lists based on search terms
// implements event listener (input, select/toggle, infoWindow


var initialLocations = [
    {
        id: 1,
        name: "Roomtailors Headquarter",
        lat: 11.111,
        long: 11.111,
        description: "Das Hauptquartier des besten Unternehmens der Welt."
    },

    {
        id: 2,
        name: "Roomtailors Feriensitz",
        lat: 11.111,
        long: 11.111,
        description: "Das Naherholungsgebiet des besten Unternehmens der Welt"
    },


    {
        id: 3,
        name: "Finanzamt",
        lat: 11.111,
        long: 11.111,
        description: "Das notwendige Übel"
    },
];

var MapView = function() {
//    'use strict'

    var self = this;

    //Initiative location list
    self.locationList = ko.observableArray([]);

    //Value of filter parameters
    self.locationFilter = ko.observable();

    //Index of currently selected location
    self.selectedLocation = ko.observableArray([]);

    //List of filtered locations
    self.displayLocations = ko.computed(function() {
        if (!self.locationFilter()) {
            return self.locationList();
        } else {
            return ko.utils.arrayFilter(self.locationList(), function(location) {
                var string = location.name().toLowerCase();
                var startsWith = locationFilter().toLowerCase();

                string = string || "";
                if (startsWith.length > string.length) {
                    return false;
                }
                return string.substring(0, startsWith.length) === startsWith;
            });
        }
    });

    //Populate location list with model data
    initialLocations.forEach(function (item) {
        self.locationList.push(new Location(item));
    });

    //Change value of currently selected location
    this.selectLocation = function(newLocation) {

        //Change selected location to new location
        self.selectedLocation(newLocation);

        //Trigger map change

    };

};
