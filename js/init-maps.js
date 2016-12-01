window.initMap = function() {

    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('mapfield'), {
      center: {lat: 48.739737, lng: 9.098477},
      scrollwheel: false,
      zoom: 15
    });
};
