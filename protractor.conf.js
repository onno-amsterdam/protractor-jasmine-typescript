const { SpecReporter } = require('jasmine-spec-reporter');
const log4js = require('log4js');
const path = require('path');
const AllureReporter = require('jasmine-allure-reporter');

const allureResultsPath = path.join('./out-tsc/e2e/allure-xml-report');
const jasmineSpecReporterConfig = require('./config/jasmine-reporters.config');
const chromeConfig = require('./config/chrome.config');
const log4jsConfig = require('./config/log4js');

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

exports.config = localConfig;

/***************
 *  FUNCTIONS *
 ***************/
async function onPrepare() {
  // settings for browser logger;
  log4jsConfig.call();
  browser.logger = log4js.getLogger('APP_LOGGER');
  
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
  
  jasmine.getEnv().addReporter({
    specDone: result => {
      if (result.status !== 'disabled' && result.status !== 'pending') {
        browser.logger.info(
          `${++browser.params.jasmineSpecCounter}) TEST SCENARIO FINISHED: ${
            result.fullName
          }: ${result.status.toUpperCase()}`,
        );
      }
    },
  });

  jasmine.getEnv().addReporter(
    new AllureReporter({
      resultsDir: allureResultsPath,
    }),
  );
  configureAllureScreenshots();
}

function configureAllureScreenshots() {
  let originalAddExpectationResult = jasmine.Spec.prototype.addExpectationResult;
  jasmine.Spec.prototype.addExpectationResult = function() {
    const isTestHasPassed = arguments[0];

    if (!isTestHasPassed) {
      browser.takeScreenshot().then(png => {
        allure.createAttachment('Screenshot', () => Buffer.from(png, 'base64'), 'image/png')();
      });
    }
    return originalAddExpectationResult.apply(this, arguments);
  };
}