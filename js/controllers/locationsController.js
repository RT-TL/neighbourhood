/**
 * Created by SpinyNorman on 25/11/2016.
 */

var app = app || {};

(function () {
	'use strict';

	var Controller = function(){

		this.initialLocations = [
                {
                    id: 1,
                    name: "Roomtailors Headquarter",
                    lat: 48.739626,
                    long: 9.098718,
                    description: "Das Hauptquartier des besten Unternehmens der Welt."
                },

                {
                    id: 2,
                    name: "Fraunhofer institute",
                    lat: 48.740147,
                    long: 9.096008,
                    description: "Das Naherholungsgebiet des besten Unternehmens der Welt"
                },


                {
                    id: 3,
                    name: "High School Lib",
                    lat: 48.741140,
                    long: 9.102013,
                    description: "Das notwendige Übel"
                },
            ];

		this.getLocations = function () {
			return this.initialLocations;
		}
	};

	// Create our global controller
	app.Controller = new Controller();
})();
