var app = app || {};

/**
 * populates data array based on JSON-stored location file
 */
app.initialLocations = function() {
    this.data = [];
    this.loadJSON = function (path)
    {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    app.data = JSON.parse(xhr.responseText);
                    return app.data;
                } else {
                    app.data = {};
                    return app.data;
                }
            }
        };
        xhr.open("GET", path, true);
        xhr.send();
    };

    this.loadJSON('locations.json')

};

app.initialLocations();