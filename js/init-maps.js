window.initMap = function() {
    'use strict';

    // Create a map object and specify the DOM element for display.
    app.map = makeMap();
    app.google = google;

    if (typeof app.map === 'undefined') {
    // the variable is defined
        return alert("Sorry guys, Google is not working today");
    }

    //render list
    ko.applyBindings(app.MapView);
};

makeMap = function() {
    return new google.maps.Map(document.getElementById('mapfield'), {
      center: {lat: 48.739737, lng: 9.098477},
      scrollwheel: false,
      zoom: 15
    });
}