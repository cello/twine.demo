/**
 * @license Copyright (c) 2011 Cello Software, LLC.
 * All rights reserved.
 * Available via the new BSD License.
 */
/*jshint
    bitwise: false, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, maxlen: 100,
    newcap: true, noarg: true, noempty: true, onevar: true, passfail: false, undef: true,
    white: true
*/
/*global define: false, require: false */

// configure requirejs
require({
	baseUrl: "./",
	packages: [
		{
			name: "twine",
			location: "support/twine",
			lib: "lib",
			main: "lib/Twine"
		},
		{
			name: 'dojo',
			location: 'support/dojo',
			main: 'main',
			lib: '.'
		},
		{
			name: 'dijit',
			location: 'support/dijit',
			main: 'main',
			lib: '.'
		}
	],
	paths: {
		// see https://groups.google.com/d/topic/amd-implement/xF1BuikRPZ8/discussion
		//array: "dojo/_base/array",
		compose: "support/twine/support/compose",
		promise: "support/twine/support/promise",
		lang: "support/twine/support/lang",
		demo: "lib",
		mustache: "support/mustache"
	}
},
['twine', 'dojo'],
function (Twine, d) {
	var container = new Twine();
	// register an unload handler to destroy the container
	d.addOnUnload(function () {
		container.destroy();
	});

	container.configure({
		installers: [
			'demo/app/installer'
		]
	});
});
