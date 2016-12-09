/**
 *
 * @param location: object containing lat, long
 * @returns {google.maps.Marker}
 * @constructor
 */
app.Marker = function(location) {
    'use strict'

    var self = this

    var marker = new google.maps.Marker({
        position: {lat: location.lat, lng: location.long},
        map: app.map,
        animation: google.maps.Animation.DROP,
        visible: true,
    });

    marker.location = location
    marker.content = ""
    marker.flickrImages = ko.observable("")

    //Determines content of info window depending on API response
    marker.infoContent = ko.computed(function(){
        var content = '<h3>' + marker.location.name + '</h3><p> ' + marker.location.description + '</p>'
        if(marker.flickrImages() === "") {
            content += "<i>No response from flickr</i>"
            return content
        } else {
            content += marker.flickrImages() + "<div class='col-xs-12 text-xs-center top-buffer'><i>Powered by flickr</i></div>"
            return content
        }
    })

    marker.addListener('click', function() {
        self.markerClicked()
    });


    /** markerClicked
     * separate function to address on click events, also triggered from view-model
     */
    self.markerClicked = function() {
        self.bounce();
        self.showInfoWindow(app.informationWindow);
    }

    /**
     * showInfoWindow
     * displays text information window upon map marker click
     *
     * @param infowindow
     */
    self.showInfoWindow = function(infowindow) {
        if(infowindow.marker != marker) {
            self = this;
            infowindow.marker = marker;

            axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=cdb1ca90da28f6167ecd4dd609fcebab&accuracy=16&lat=' + marker.location.lat + '&lon=' + marker.location.long + '&per_page=2&format=json&nojsoncallback=1')
              .then(function (response) {
                  self.apiResponse = response.data.photos.photo;

                    //Handle empty results/errors
                    if (typeof self.apiResponse !== "undefined") {

                        //Create content string from callback result
                        self.apiResponse.forEach( function(value){
                            var link = 'https://farm' + value.farm + '.staticflickr.com/' + value.server + '/' + value.id + '_' + value.secret
                            marker.flickrImages(marker.flickrImages() + '<div class="col-xs-6"><a href="' + link + '.jpg" target="_blank"><img src="' + link +'_s.jpg" class="img-responsive"></a></div>')
                        });

                    }

                  self.populateInfoWindow(infowindow);

              })
              .catch(function (error) {
                  console.log(error)
                  marker.content = "<p>No response from flickr</p>";
                  self.populateInfoWindow(infowindow);
              });

       }
    }

    self.populateInfoWindow = function(infowindow) {
        infowindow.setContent (marker.infoContent());
        infowindow.open(app.map, infowindow.marker);
    }

    self.bounce = function() {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        window.setTimeout(function(){
            marker.setAnimation(null);
        },1400);
    }

    return marker;
};
