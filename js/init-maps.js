function initMap() {

    // Create a map object and specify the DOM element for display.
    try{
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 48.739737, lng: 9.098477},
          scrollwheel: false,
          zoom: 14
        });
    }
    catch(err) {
        console.log(err);
        setTimeout(initMap(), 3000);
    }

}