const jasmineSpecReporterConfig = {
  spec: {
    displaySuccessful: false,
    displayFailed: true,
    displayErrorMessages: true,
    displayStacktrace: 'raw',
    displayNumber: true,
    displayDuration: true,
  },
  summary: {
    displaySuccessful: true,
    displayFailed: true,
    displayErrorMessages: true,
    displayStacktrace: 'raw',
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
