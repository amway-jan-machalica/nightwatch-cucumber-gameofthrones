var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber.json',
  output: 'reports/cucumber.html',
  reportSuiteAsScenarios: true,
  launchReport: process.env.LAUNCH_HTML_REPORT,
//@TODO: fetch metadata from... Jenkins env?
//        metadata: {
//            "App Version":"0.3.2",
//            "Test Environment": "STAGING",
//            "Browser": "Chrome  54.0.2840.98",
//            "Platform": "Windows 10",
//            "Parallel": "Scenarios",
//            "Executed": "Remote"
//        }
};

reporter.generate(options);