var webpackConfig = require('./webpack.config');
// Karma configuration
// Generated on Fri Feb 16 2018 13:08:34 GMT-0500 (Eastern Standard Time)

module.exports = function (config) {
    config.set({
        //mime: { 'text/x-typescript': ['ts', 'tsx'] }, //for some reasone ts files are interpreted wrong.

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        exclude: ['node_modules'],


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'], //sinon


        files: [
            // only specify one entry point
            // and require all tests in there
            'tests/**/*.spec.ts'
        ],

        preprocessors: {
            // add webpack as preprocessor
            'tests/**/*.spec.ts': ['webpack']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'PhantomJS', 'IE', 'Firefox', 'Edge'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        webpack: {
            resolve: webpackConfig.resolve,
            module: webpackConfig.module
        }

    });
};
