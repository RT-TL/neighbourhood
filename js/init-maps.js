window.initMap = function() {

    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('mapfield'), {
      center: {lat: 48.739737, lng: 9.098477},
      scrollwheel: false,
      zoom: 15
    });

    if (typeof map === 'undefined') {
    // the variable is defined
        return alert("Sorry guys, Google is not working today");
    }

    console.log(map);

    //render list
    ko.applyBindings(app.Mapview);

};
