const log4js = require('log4js');

module.exports = () => {
  log4js.configure({
    appenders: {
      fileLog: {
        type: 'file',
        filename: 'out-tsc/e2e/logs/logInfo.log',
        layout: {
          type: 'pattern',
          pattern: '%[[%d{yyyy-MM-dd hh:mm:ss}] %] %m',
        },
      },
      console: {
        type: 'console',
        layout: {
          type: 'pattern',
          pattern: '%[[%d{yyyy-MM-dd hh:mm:ss}] %] %m',
        },
      },
    },
    categories: {
      file: { appenders: ['fileLog'], level: 'info' },
      another: { appenders: ['console'], level: 'info' },
      default: { appenders: ['console', 'fileLog'], level: 'info' },
    },
  });
};
