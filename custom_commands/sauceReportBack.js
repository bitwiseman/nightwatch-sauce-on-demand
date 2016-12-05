exports.command = function (done) {
  var SauceLabs = require('saucelabs');
  var sauceLabs = new SauceLabs({
    username: process.env.SAUCE_USERNAME,
    password: process.env.SAUCE_ACCESS_KEY
  });

  var sessionId = this.capabilities['webdriver.remote.sessionid'];
  var jobName = this.currentTest.name;

  sauceLabs.updateJob(sessionId, {
    passed: this.currentTest.results.failed === 0,
    name: jobName
  }, function () {
    console.log('updated');
    done();
  });

  console.log("SauceOnDemandSessionID=" + sessionId + " job-name=" + jobName);
  this.end();
};
