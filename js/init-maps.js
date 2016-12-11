/**
 * initMap instantiates google map
 *
 */
initMap = function() {
    'use strict';

    //Initiate Google Maps
    app.map = new google.maps.Map(document.getElementById('mapfield'), {
        center: {lat: 48.739737, lng: 9.098477},
        scrollwheel: false,
        zoom: 11
    });

    //Create info window for API content
    app.informationWindow = new google.maps.InfoWindow({
        content: '',
        maxWidth: 200
    });

    //Create view model
    app.mapView = new MapView();

    ko.applyBindings(app);
};