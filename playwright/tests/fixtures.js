const base = require('@playwright/test');

exports.test = base.test.extend({
  browser: async ({ playwright, browser }, use, workerInfo) => {
    // Use browserless if configured
    // Currently using .connectOverCDP()
    if (workerInfo.project.name.match(/browserless/)) {
      const vBrowser = await playwright.chromium.connectOverCDP({
        endpointURL: 'ws://localhost:3003'
      });
      //playwright endpoint for .connect()
      //const vBrowser = await playwright.chromium.connect({
      //  wsEndpoint: 'wss://<url>'
      //})
      await use(vBrowser);
    } else {
      // Use Local Browser for testing.
      await use(browser);
    }
  },
});