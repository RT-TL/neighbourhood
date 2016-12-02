/**
 * Created by SpinyNorman on 25/11/2016.
 */
var Marker = function (location) {
    var newMarker = new google.maps.Marker({
        position: {location.lat, location.long},
        map: app.map,
        visible: location.visible
    });

    return newMarker;
};