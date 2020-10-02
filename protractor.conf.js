const path = require('path');
const { SpecReporter } = require('jasmine-spec-reporter');
const jasmineSpecReporterConfig = require('./config/jasmine-reporters.config');
const chromeConfig = require('./config/chrome.config');

const localConfig = {
    framework: 'jasmine',
    
    // config to run the webdriver without first starting it
    capabilities: chromeConfig.capabilities,
    chromeDriver: chromeConfig.chromeDriver,
    directConnect: true,
    
    specs: ['specs/**/*.ts'],
    // baseUrl should have the file protocol if test pages are stored locally
    // when using browser.get in the tests you only have pass in the path relative to the baseUrl
    baseUrl: 'http://localhost:8081',
    // execute the onPrepare function
    onPrepare,
  };

async function onPrepare() {
  // as the local test page doesn't have angular we need to disable waiting for angular
  browser.waitForAngularEnabled(false);
  // to run protrator with typescript and without compiling to javascript first
  require('ts-node').register({
    project: path.join(__dirname, './tsconfig.json'),
  });
  // webdriver will wait implicitely for 3 seconds before it times out
  await browser.manage().timeouts().implicitlyWait(3000);
  // the reporter below allows for the logs of the test execution to display in the console
  jasmine.getEnv().addReporter(new SpecReporter(jasmineSpecReporterConfig));
}

exports.config = localConfig;