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
			location: "support/twine/lib",
			lib: ".",
			main: "Twine"
		},
		{
			name: "compose",
			location: "support/twine/support/compose/lib",
			lib: ".",
			main: "compose"
		},
		{
			name: "promised-io",
			location: "support/twine/support/promised-io/lib",
			lib: "."
		}
	],
	paths: {
		promise: "support/twine/support/promised-io/lib/promise",
		events: "support/twine/support/uber/src/events",
		has: "support/twine/support/has.js/has",
		require: "support/requirejs/require",
		lang: "support/twine/support/lang",
		array: "support/twine/support/array",
		demo: "lib"
	}
},
['twine'],
function (Twine) {
	var container = new Twine();

	container.configure({
		installers: [
			'demo/installer/Debug',
			'demo/installer/App'
		]
	});
});
