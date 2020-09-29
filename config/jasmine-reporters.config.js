const jasmineSpecReporterConfig = {
  spec: {
    displaySuccessful: true,
    displayFailed: true,
    displayErrorMessages: false,
    displayStacktrace: false,
    displayNumber: true,
    displayDuration: true,
  },
  summary: {
    displaySuccessful: true,
    displayFailed: true,
    displayErrorMessages: false,
    displayStacktrace: 'pretty',
    displayNumber: true,
    displayDuration: true,
  },
  colors: {
    success: 'green',
    failure: 'red',
    pending: 'yellow',
  },
  customProcessors: [],
};

module.exports = jasmineSpecReporterConfig;
