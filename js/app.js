/**
 * Created by SpinyNorman on 22/11/2016.
 */


/**
 * Architecture
 *
 * LocationsModel contains all info about a loction
 * LocationsController allows to list/filter content
 * - Select Location (Open Window, Marks entry)
 * - Filter Locations
 * - Unselect Location
 * LocationsView enables rendering of results
 * ThirdParty API allows to be called with additional info
 *
 **/
import MapView from 'views/map-view';
import LocationModel from 'models/location';

var app = app || {};

(function () {
	'use strict';

    //Create the view class
    app.Locations = new LocationModel();
    app.mapView = new MapView();

})();
