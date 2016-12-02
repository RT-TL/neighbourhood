var app = app || {};

(function () {
    'use strict';

    var Markers = function () {

        var self = this;

        self.list = [];

        self.addMarker = function (location) {
            var marker = new google.maps.Marker({
                position: location,
                map: app.map
            });
            self.list.push(marker);
        }

        // Sets the map on all markers in the array.
        self.setMapOnAll = function (map) {
            for (var i = 0; i < self.list.length; i++) {
                self.list[i].setMap(map);
            }
        }

        // Removes the markers from the map, but keeps them in the array.
        self.clearMarkers = function () {
            self.setMapOnAll(null);
        }

        // Shows any markers currently in the array.
        self.showMarkers = function () {
            self.setMapOnAll(app.map);
        }

        // Deletes all markers in the array by removing references to them.
        self.deleteMarkers = function () {
            self.clearMarkers();
            self.list = [];
        }
    };

    app.Markers = new Markers();

})();