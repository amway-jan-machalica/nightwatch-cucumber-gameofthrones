const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
const launch_url = 'http://10.1.2.10:3000';

defineSupportCode(function ({Given, When, Then}) {

  //Promise-style asynchronous handling - no callback parameter
  Given('I am the Khaleesi of the Great Grass Sea', function () {
    
    return client
      .url(launch_url + '/essos')
      .then(() => {
       return client.assert.title('Game of Thrones universe - Essos');
      }) 
      .then(() => {
        return client.pause(500);
      });
   
  });

  Given('I have {int} dragon eggs', function (eggsCount, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  When('I put all eggs on funeral pyre', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  When('I set the fire', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  When('I wait some time', function () {
    return client
      .pause(5000);
  });

  Then('I have {int} young dragons', function (dragonsCount, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Given('I am the queen of Vesteros', function () {
     return client
      .url(launch_url + '/vesteros')
      .then(() => {
         return client.assert.title('Game of Thrones universe - Vesteros');
      }) 
      .then(() => {
        return client.pause(500);
      });
  });

  When(/^I hit the ['](.*)['] family$/, function (familyName) {
    return client
      .click('.family.' + familyName.toLowerCase());
  });

  Then(/^The ['](.*)['] family breaks$/, function (familyName) {
    return client
      .expect.element('.family.' + familyName.toLowerCase()).to.have.attribute('class').which.contains('broken');
  });

});