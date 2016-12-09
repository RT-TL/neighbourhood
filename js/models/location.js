/**
 * Creates a new location object that is parent to marker elements on the map
 *
 * @param data
 * @constructor
 */
var Location = function(data) {
    this.id = data.id
    this.name = data.name
    this.lat = data.lat
    this.long = data.long
    this.description = data.description
    this.marker = new app.Marker(data)
};