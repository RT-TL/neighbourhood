
var app = app || {};

MarkerView = function () {
    var self = this;

    self.markerList = ko.observableArray([]);

    //Populate map with initial locations
    _.forEach(app.initialLocations(), function(location) {
        self.markerList[location.id] = new app.Marker(location);

        //Attach marker information to map marker
        self.markerList[location.id].location = location;

        //Attach click listener to marker
        self.markerList[location.id].addListener('click', function() {
            self.markerClicked(this)
        });
    });

    /**
     *
     * @param marker
     */
    self.markerClicked = function(marker) {
        self.bounce(marker);
        self.showInfoWindow(marker, app.informationWindow);
    }

    /**
     * showInfoWindow
     * displays text information window upon map marker click
     *
     * @param marker: object google map marker
     * @param infowindow
     */
    self.showInfoWindow = function(marker,infowindow) {
        if(infowindow.marker != marker) {
            self = this;
            infowindow.marker = marker;

            axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=cdb1ca90da28f6167ecd4dd609fcebab&accuracy=16&lat=' + marker.location.lat + '&lon=' + marker.location.long + '&per_page=2&format=json&nojsoncallback=1')
              .then(function (response) {
                  self.apiResponse = response.data.photos.photo;

                    //Handle empty results/errors
                    if (typeof self.apiResponse !== "undefined") {
                        this.content = "";

                        //Create content string from callback result
                        self.apiResponse.forEach( function(value){
                            var link = 'https://farm' + value.farm + '.staticflickr.com/' + value.server + '/' + value.id + '_' + value.secret
                            this.content = this.content + '<div class="col-xs-6"><a href="' + link + '.jpg" target="_blank"><img src="' + link +'_s.jpg" class="img-responsive"></a></div>'
                        });

                        this.content += "<div class='col-xs-12 text-xs-center top-buffer'><i>Powered by flickr</i></div>"

                    } else {
                        this.content = "<i>No response from flickr</i>"
                    }

                  self.populateInfoWindow(infowindow, this.content);

              })
              .catch(function (error) {
                  content = "<p>No response from flickr</p>";
                  self.populateInfoWindow(infowindow, content);
              });

       }
    }

    self.populateInfoWindow = function(infowindow, content) {
        infowindow.setContent ('<h3>' + infowindow.marker.location.name + '</h3><p> ' + infowindow.marker.location.description + '</p>' + content);
        infowindow.open(app.map, infowindow.marker);
    }

    self.bounce = function(marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        window.setTimeout(function(){
            marker.setAnimation(null);
        },1400);
    }
}
