// configure requirejs
require({
    baseUrl: "./",
    packages: [
        {
            name: "compose",
            location: "support/compose/lib",
            lib: ".",
            main: "compose"
        },
        {
            name: "patr",
            location: "support/patr/lib",
            lib: ".",
            main: "runner"
        },
        {
            name: "twine",
            location: "support/twine/lib",
            lib: ".",
            main: "Twine"
        },
        {
            name: "promised-io",
            location: "support/promised-io/lib",
            lib: "."
        }
    ],
    paths: {
        promise: "support/promised-io/lib/promise",
        eventEmitter: "support/uber/src/events",
        has: "support/has.js/has",
        require: "support/requirejs/require"
    }
}, ['compose', 'patr', 'twine', 'promise', 'eventEmitter', 'has'], function () {
    console.log('started: ', arguments);    
});