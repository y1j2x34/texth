'use strict';

module.exports = {
    basePath: '',

    frameworks: ['mocha', 'chai'],

    restartBrowserBetweenTests: false,

    files: [{
        pattern: 'test/specs/**/*.spec.ts',
        served: true,
        included: true,
        watched: false
    }, {
        pattern: 'src/**/*.ts',
        served: true,
        included: false,
        watched: false
    }],

    mime: {
        'text/x-typescript': ['ts','tsx']
    },

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    autoWatch: true,

    usePolling: true,

    atomic_save: false,
    customLaunchers: {
        HeadlessChrome: {
            base: 'ChromeHeadless',
            flags: [
                '--no-sandbox',
                '--headless',
                '--disable-gpu',
                '--disable-translate',
                '--disable-extensions'
            ]
        }
    },

    singleRun: false,

    concurrency: Infinity
};
