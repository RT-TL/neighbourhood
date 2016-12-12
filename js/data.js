var app = app || {};

/**
 * populates data array based on JSON-stored location file
 */
app.initialLocations = function() {
    this.data = [];
    this.loadJSON = function (path)
    {
        fetch(path).then(function(response) {
            return response.json();
        }).then(function(j){
            app.data = j;

            //Create view model
            app.mapView = new MapView();

            //Activate view model
            ko.applyBindings(app);

            return app.data;
        })
        .catch(function(err) {
            console.log(err);
            app.data = {};
            alert("Could not load initial data");
            return app.data;
        });

    };

    this.loadJSON('locations.json');

};

