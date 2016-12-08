/**
 *
 * @param location: object contaning lat,lng,title,visibility
 * @returns {google.maps.Marker}
 * @constructor
 */
app.Marker = function(location) {
    'use strict'

    var marker = new google.maps.Marker({
        position: {lat: location.lat, lng: location.long},
        map: app.map,
        animation: google.maps.Animation.DROP,
        visible: true,
    });

    return marker;
};
