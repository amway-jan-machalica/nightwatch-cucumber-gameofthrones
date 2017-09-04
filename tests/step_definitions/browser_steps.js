const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {

  Given('I am the Khaleesi of the Great Grass Sea', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Given('I have {int} dragon eggs', function (eggsCount, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  When('I put eggs on funeral pyre', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  When('I set the fire', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  When('I wait some time', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then('I have {int} young dragons', function (dragonsCount, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Given('I am the queen of Vesteros', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  When(/^I hit the ['](.*)['] family$/, function (familyName, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then(/^The ['](.*)['] family breaks$/, function (familyName, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

});