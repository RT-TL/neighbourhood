/**
 * initMap instantiates google map
 *
 */
initMap = function() {
   'use strict';

   app.map = new google.maps.Map(document.getElementById('mapfield'), {
      center: {lat: 48.739737, lng: 9.098477},
      scrollwheel: false,
      zoom: 15
    });

    //var informationWindow = new google.maps.InfoWindow();

    //Populate map with initial locations
    _.forEach(app.initialLocations(), function(location) {
        app.markerList[location.id] = new google.maps.Marker({
            position: {lat: location.lat, lng: location.long},
            map: app.map,
            animation: google.maps.Animation.DROP,
            visible: true
        });
    });

        //this onclick event opens the info window.
        /*
        marker.addListener('click', function() {
             bounce(this);
            showInfoWindow(this,informationWindow);
        });
    }
       function showInfoWindow(marker,infowindow) {
        if(infowindow.marker != marker) {
          infowindow.marker = marker;
        infowindow.setContent ('<h3>' + marker.title + '</h3>');
        infowindow.open(map,marker);
       }
   }

   function bounce(marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        window.setTimeout(function(){
            marker.setAnimation(null);
        },1400);
   }*/

};

ko.applyBindings(app.MapView);
