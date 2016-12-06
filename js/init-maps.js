/**
 * initMap instantiates google map
 *
 */
initMap = function() {
   'use strict';

   app.map = new google.maps.Map(document.getElementById('mapfield'), {
      center: {lat: 48.739737, lng: 9.098477},
      scrollwheel: false,
      zoom: 11
    });

    app.informationWindow = new google.maps.InfoWindow({
        content: '',
        maxWidth: 200
    });

    //var informationWindow = new google.maps.InfoWindow();

    //Populate map with initial locations
    _.forEach(app.initialLocations(), function(location) {
        app.markerList[location.id] = new google.maps.Marker({
            position: {lat: location.lat, lng: location.long},
            map: app.map,
            animation: google.maps.Animation.DROP,
            visible: true,
        });

        //Attach marker information to map marker
        app.markerList[location.id].location = location;

        //Attach click listener to marker
        app.markerList[location.id].addListener('click', function() {
            bounce(this);
            showInfoWindow(this, app.informationWindow);
        });
    });

};

/**
 * showInfoWindow
 * displays text information window upon map marker click
 *
 * @param marker: object google map marker
 * @param infowindow
 */
showInfoWindow = function showInfoWindow(marker,infowindow) {
    if(infowindow.marker != marker) {
        self = this;
        infowindow.marker = marker;
        this.content = "";

        axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=cdb1ca90da28f6167ecd4dd609fcebab&accuracy=16&lat=' + marker.location.lat + '&lon=' + marker.location.long + '&per_page=2&format=json&nojsoncallback=1')
          .then(function (response) {
              self.apiResponse = response.data.photos.photo;

                //Handle empty results/errors
                if (typeof self.apiResponse !== "undefined") {

                    //Create content string from callback result
                    self.apiResponse.forEach( function(value){
                        var link = 'https://farm' + value.farm + '.staticflickr.com/' + value.server + '/' + value.id + '_' + value.secret
                        this.content = this.content + '<div class="col-xs-6"><a href="' + link + '.jpg" target="_blank"><img src="' + link +'_s.jpg" class="img-responsive"></a></div>'
                    });

                    this.content += "<div class='col-xs-12 text-xs-center top-buffer'><i>Powered by flickr</i></div>"

                } else {
                    this.content = "<i>No response from flickr</i>"
                }

              populateInfoWindow(infowindow, this.content);

          })
          .catch(function (error) {
              content = "<p>No response from flickr</p>";
              populateInfoWindow(infowindow, content);
          });

   }
}

function populateInfoWindow(infowindow, content) {
    infowindow.setContent ('<h3>' + infowindow.marker.location.name + '</h3><p> ' + infowindow.marker.location.description + '</p>' + content);
    infowindow.open(app.map, infowindow.marker);
}

function bounce(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    window.setTimeout(function(){
        marker.setAnimation(null);
    },1400);
}

ko.applyBindings(app.MapView);
