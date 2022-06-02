// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: '.',
  testMatch: '**/*.spec.js',
  timeout: 30 * 1000,
  use: {
    viewport: {
      width: 1024,
      height: 768
    },
    headless: false,
    video: 'on',
    screenshot: 'on',
    trace: 'on',
    baseURL: 'https://playwright.dev/',
    ignoreHTTPSErrors: true,
    
  },
  workers: 1,
  projects: [
    // -- browserless Configurations --
    {
      name: 'browserless',
      use: {
        headless: false,
        browserName: 'chromium',
        trace: 'off',
        video: 'off',
        screenshot: 'off',
      }
    },
    // -- Local Browsers --
    {
      name: "local-chrome",
        use: {
            browserName: 'chromium',
            channel: 'chrome'
        },
    }
  ]
};

module.exports = config;
