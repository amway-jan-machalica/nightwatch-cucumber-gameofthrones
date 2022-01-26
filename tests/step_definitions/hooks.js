var {defineSupportCode} = require('cucumber');
const {client} = require('nightwatch-cucumber');

defineSupportCode(function ({Before, After}) {
  After(function () {
    return client.end();
  });

  Before(function () {
    return
      client.resizeWindow(1920, 1080);
  })
});
