const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
const launch_url = 'http://10.1.2.10:3000';

defineSupportCode(function ({Given, When, Then}) {

  //Promise-style asynchronous handling - no callback parameter
  Given('I am the Khaleesi of the Great Grass Sea', function () {
    
    return client
      .url(launch_url + '/essos')
      .then(() => {
       return client.assert.title('Game of Thrones universe');
      }) 
      .then(() => {
        return client.pause(500);
      });
   
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

  Given('I am the queen of Vesteros', function () {
     return client
      .url(launch_url + '/vesteros')
      .then(() => {
         return client.assert.title('Game of Thrones universe');
      }) 
      .then(() => {
        return client.pause(500);
      });
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