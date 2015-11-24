exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        '../../e2e/spec/LoginSpec.js'
    ],

    capabilities: {
        browserName: 'firefox'
        //shardTestFiles: true,
        //maxInstances: 2
    },

    directConnect: true,

    seleniumServerJar: '${selenium-standalone-jar.location}',

    baseUrl: 'http://localhost:9020/AngularE2ELoginBasicAuthentication',

    //make the browser maximized so that it suits for all kinds of devices;
    // some tests are failing when run in lower resolutions.
    //however this issue is only in firefox.
    onPrepare: function () {
        browser.driver.manage().window().maximize();
    },

    framework: 'jasmine',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,             // Use colors in the command line report.
        isVerbose: true,              //display spec names as they are being executed
        includeStackTrace: true,      //print stacktrace when things go wrong
        defaultTimeoutInterval: 360000 //set 15 second default timeout
    }

};