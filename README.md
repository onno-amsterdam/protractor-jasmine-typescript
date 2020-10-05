# Project Title

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