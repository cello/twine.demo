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
},
['twine'],
function (twine) {
	console.log('started: ', arguments);
});
