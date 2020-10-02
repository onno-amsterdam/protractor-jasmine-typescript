const path = require('path');

const downloadsPath = path.resolve(__dirname, '../../../../out-tsc/e2e/downloads');

const chromeConfig = {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      excludeSwitches: ['enable-automation', 'enable-logging'],
      args:
        [
          '--disable-browser-side-navigation',
          '--disable-dev-shm-usage',
          '--disable-extensions',
          '--disable-gpu',
          '--disable-infobars',
          '--no-sandbox',
          '--test-type=browser',
          '--window-size=1280,720'
        ],
      prefs: {
        'plugins.always_open_pdf_externally': true,
        download: {
          prompt_for_download: false,
          directory_upgrade: true,
          default_directory: downloadsPath
        },
      },
    },
  },
};

module.exports = chromeConfig;