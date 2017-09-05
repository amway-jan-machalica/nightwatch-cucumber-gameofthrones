const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
const dragAndDrop = require('html-dnd').codeForSelectors;

defineSupportCode(function ({Given, When, Then}) {

    Given('I am the Khaleesi of the Great Grass Sea', function () {

        return client
      .resizeWindow(1920, 1080)
      .url(client.launch_url + '/essos')
            .then(() => {
                return client.assert.title('Game of Thrones universe - Essos');
            })
            .then(() => {
        return client.pause(100);
            });

    });

  Given('I have {int} dragon eggs', function (eggNumber) {
    var commandChain = client;
    var eggCounter = eggNumber;
    
    while(eggCounter--) {
      commandChain = commandChain.click('.createEgg');
    }

    return commandChain
      .expect.element(`.eggbox > .egg:nth-of-type(${eggNumber})`).to.be.visible.before(3500)
      .then(() => {
        return commandChain.assert.elementNotPresent(`.eggbox > .egg:nth-of-type(${eggNumber + 1})'`);
      });
    });

  When('I put {int} eggs on funeral pyre', function (eggNumber) {
    var commandChain = client;
    var eggCounter = eggNumber;

    while(eggCounter--) {
      commandChain = commandChain.execute(dragAndDrop, ['.eggbox .egg', '.pyre']);
    }
    
    return commandChain
      .expect.element('.pyre .egg:nth-of-type(' + eggNumber + ')').to.be.visible.before(7500)
      .then(() => {
        return commandChain
          .assert.elementNotPresent('.pyre .egg:nth-of-type(' + (eggNumber + 1) + ')');
      });
    });

  When('I set the fire', function () {
    return client
      .click('.setfire');
    });

  When('I wait some time', function () {
    return client
      .pause(5000);
    });

  Then('I have {int} young dragons', function (dragonsCount) {
    return client
      .expect.element(`.pyre > .dragon:nth-of-type(${dragonsCount})`).to.be.present.before(100)
      .then(() => {
        return client.assert.elementNotPresent(`.pyre > .dragon:nth-of-type(${dragonsCount + 1})`)
      });
    });

    Given('I am the queen of Vesteros', function () {
        return client
    .resizeWindow(1920, 1080)
      .url(client.launch_url + '/vesteros')
            .then(() => {
                return client.assert.title('Game of Thrones universe - Vesteros');
            })
            .then(() => {
        return client.pause(100);
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