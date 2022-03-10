const  { expect } = require('@playwright/test');
const  { test, browser } = require('./fixtures.js');

/*
Demonstrates run-over-run variability with simple time log statements.

Example output:

Running 10 tests using 1 worker

  ✓  [local-chrome] › tests/variability.spec.js:4:1 › basic test (3s)
variability:example: 878.970ms
  ✓  [local-chrome] › tests/variability.spec.js:4:1 › basic test (3s)
variability:example: 636.198ms
  ✓  [local-chrome] › tests/variability.spec.js:4:1 › basic test (3s)
variability:example: 1075.154ms
  ✓  [local-chrome] › tests/variability.spec.js:4:1 › basic test (3s)
variability:example: 731.857ms
  ✓  [local-chrome] › tests/variability.spec.js:4:1 › basic test (3s)
variability:example: 879.356ms
  ✓  [local-chrome] › tests/variability.spec.js:4:1 › basic test (3s)
variability:example: 722.682ms
  ✓  [local-chrome] › tests/variability.spec.js:4:1 › basic test (3s)
variability:example: 510.165ms
  ✓  [local-chrome] › tests/variability.spec.js:4:1 › basic test (3s)
variability:example: 1153.010ms
  ✓  [local-chrome] › tests/variability.spec.js:4:1 › basic test (3s)
variability:example: 780.326ms
  ✓  [local-chrome] › tests/variability.spec.js:4:1 › basic test (3s)
variability:example: 584.115ms

*/
test.skip('basic test', async ({ page, browser }) => {
  await console.time('variability:example');
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
  await console.timeLog('variability:example');
});

test.skip('basic test - with network shaping', async ({ page, browser }) => {
  // This uses the DevToolsProtocol to do traffic shaping from the perspective of Chrome to the target URL. 
  // Note: this does NOT affect WS traffic and has issues with http 1.1/2.0/3.0 compatibility
  const client = await page.context().newCDPSession(page);
  await client.send('Network.emulateNetworkConditions', {
    'offline': false,
    'downloadThroughput': 2000 * 1024 / 2,
    'uploadThroughput': 2000 * 1024 / 2,
    'latency': 200
  })
  await console.time('variability:example');
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
  await console.timeLog('variability:example');
});

test.only('basic test - with CPU Modification', async ({ page, browser }) => {
  // This uses the DevToolsProtocol to throttle CPU Utilization
  const client = await page.context().newCDPSession(page);
  await client.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  await console.time('variability:example');
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
  await console.timeLog('variability:example');
});

