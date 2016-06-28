//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://192.168.10.13/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
