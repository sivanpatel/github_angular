module.exports = function(config) {
  config.set({

    //base path
    basePath: '../',

    //frameworks to use
    frameworks: ['jasmine'],

    //list of files/patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'js/**/*.js',
      'test/**/*.spec.js'
    ],

    //list of files to exclude
    exclude: [],

    //preprocess matching files before serving them to the browser
    preprocessors: {},

    //test results reporter to use
    //possible values: 'dots', 'progress'
    reporters: ['progress'],

    //web server port
    port: 9876,

    //enable/disable colours
    colors: true,

    //level of logging
    logLevel: config.LOG_INFO,

    //enable/disable watching file and executing tests when files change
    autoWatch: true,

    //start these browsers
    browsers: ['PhantomJS'],

    //Continuous Integratiom mode
    singleRun: false

  });
};
