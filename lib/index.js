/**
 * @license Copyright (c) 2011 Cello Software, LLC.
 * All rights reserved.
 * Available via the new BSD License.
 */
/*jslint maxlen: 100, nomen: false, newcap: true, onevar: true, white: true, plusplus: false */
/*global define: false */

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
		array: "support/twine/support/array"
	}
});

define(['twine', './installer/Debug'],
function (Twine, KernelListener) {
	var container = Twine();

	container.install(KernelListener());

	container.destroy();
});
