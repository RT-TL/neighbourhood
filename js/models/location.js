/**
 * Created by SpinyNorman on 25/11/2016.
 */
var Location = function(data) {
    this.id = ko.observable(data.id);
    this.name = ko.observable(data.name);
    this.lat = ko.observable(data.lat);
    this.long = ko.observable(data.long);
    this.description = ko.observable(data.description);

    this.marker = ko.observableArray(app.markerList[data.id]);
};