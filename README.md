# PROTRACTOR-JASMINE-TYPESCRIPT

A starter kit for an protractor-jasmine-typescript e2e test project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To work with this project you need to have the following installed on your system:
* NodeJs;
* Docker (to run the test webpage);

### Installing

Follow the steps below to install the project on your system.

Clone the project, run command:

```
$ git clone https://github.com/onno-amsterdam/protractor-jasmine-typescript.git
```

Install all dependencies, run command:

```
$ npm install
```

## Running the tests

### Test webpage
To run the tests a test webpage is needs to run. This webpage is run in a Nginx Docker container. 

Follow the instructions in [this repository](https://github.com/onno-amsterdam/awesome-test-webpage). 

### Run command
To run the tests, run the command below:

```
$ protractor 
```

### E2E test specification
The E2E test are written in Jasmine BDD format and can be found in the spec folder. By default with the commmand above all the specifications in this folder are run. To run a specific spec file, run the command as below:

```bash
# protractor --specs=[file-name]
$ protractor --specs=blue-button.spec.ts
```

### Test Reporting
This project uses Allure to generate reports. Initialy E2E reports are generated in xml format. To generate html format and open the report follow the steps below:

To generate the html report, run the command:
```bash
# run with --clean option to overwrite any existing report
$ allure generate allure-xml-report --clean
```

To open the report, run the command:
```
$ allure open allure-report
```

### Console Step Logger
For debugging and the creation of bugs the steps executed in the test are logged to the console.

This is how the console logger is added to this project:

Add the dependencies 
* [log4js](https://www.npmjs.com/package/log4js) 
* [jamine-spec-reporter](https://www.npmjs.com/package/jasmine-spec-reporter)
run command:
```bash
npm install --save-dev log4js
npm install --save-dev jasmine-spec-reporter
```

Add the following configuration file to the project:
````
config/log4js.js
jasmine-reporters.config.js
````

Add the following code to the top of the protractor.conf.js file:
```javascript
// logger dependencies
const { SpecReporter } = require('jasmine-spec-reporter');
const log4js = require('log4js');
const log4jsConfig = require('./config/log4js');
const jasmineSpecReporterConfig = require('./config/jasmine-reporters.config');
```

To log the jasmine tests and results to the console. Add the following to the onPrepare function in the protractor.conf.js file:
```javascript
// settings for browser logger;
log4jsConfig.call();
browser.logger = log4js.getLogger('APP_LOGGER');

// the reporter below allows for the logs of the test execution to display in the console
jasmine.getEnv().clearReporters();
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
```

Now anywhere in your code you can add lines like:
```javascript
browser.logger.info('[PAGE OBJECT] this is happening in the test;');
browser.logger.warn('[COMMAND] this is taking way too long;');
browser.logger.error('[ERROR] this thing is completely broken;');
browser.logger.fatal(`[THIS AREA] you can pass in variables ${variable}`);
```

When implementing this custom logger please consider the following:
* add at least logger output as possible;
* make sure it's helpfull for debugging;
* it should be able to be copy pasted as steps in a bug;

## Built With

* [NodeJs](https://nodejs.org/en/) - Javascript Runtime Engine
* [Protractor](http://www.protractortest.org/#/) - The E2E testing framework
* [Allure](http://allure.qatools.ru/) - Test Reporter
* [Jasmine](https://jasmine.github.io/) - BDD Specification

## Contributing

Feel free to contact the author if you want to collaborate on this project.

## Authors

* **Onno van Piggelen** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details