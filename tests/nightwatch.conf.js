const SCREENSHOT_PATH = "./screenshots/";
const BINPATH = './node_modules/nightwatch/bin';

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'tests/step_definitions',
    '--format', 'json:reports/cucumber.json',
    '--format', 'snippets',
    'tests/features'
  ]
});

module.exports = {
  "output_folder": "./reports",
  custom_assertions_path: './tests/assertions',
  live_output: false,
  disable_colors: false,
  "test_settings": {
    "default": {
      appEntryPoint: "http://gameofthrones.lvh.me:3000",
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      screenshots: {
        enabled: true,
        on_failure: true,
        "path": SCREENSHOT_PATH
      },
      "globals": {
        "waitForConditionTimeout": 5000
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      "selenium": {
        "start_process": true,
        "server_path": BINPATH + "/selenium.jar",
        log_path: '',
        "host": "127.0.0.1",
        "port": 4444,
        cli_args: {
          "webdriver.chrome.driver": BINPATH + "/chromedriver"
        }
      }
    }
  }
}

require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) { // got it?
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function (error) {
      if (error) throw new Error(error); // no point continuing so exit!
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});