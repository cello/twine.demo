// configure requirejs
require({
	baseUrl: "./",
	packages: [
		{
			name: "twine",
			location: "support/twine/lib",
			lib: ".",
			main: "Twine"
		}
	],
	paths: {
		require: "support/requirejs/require"
	}
},
['twine'],
function (Twine) {
	console.log('started: ', arguments);
});
