# NightwatchJS - CucumberJS - Game of Thrones
czyli rzecz o testowaniu e2e

## Dlaczego Nocna Straż potrzebuje kiszonych ogórków?
Minęły tysiące lat, a Nocna Straż nadal nie umie warzyć piwa - piją więc wódkę i zakąszają ogóreczkiem.

This repo contains some funny code, intented for explaining e2e testing with NightwatchJS + CucumberJS. Everything is divided into steps that are stored on separate branches, that may be checked out as the tutorial moves forward.

## Requirements
At this level all you need is clean clone of the repo, and, of course, nodeJS installed on your machine (or working vagrant, as the repo contains functional Vagrantfile).

## Setting things up

vagrant plugin install vagrant-vbguest

---then---

npm install

---or---

vagrant up

## Runnig the server
npm start

## Running the tests
npm test

## And now

Go to http://gameofthrones.lvh.me:3000/testexpress - assuming you're on local,

or http://10.1.2.10:3000/testexpress - for Vagrant users

Execute tests, by typing

npm test

So you can see the results.

- check tests/nightwatch.conf.js
- check package.json

Checkout first step with git.