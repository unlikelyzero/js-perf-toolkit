const { test, browser } = require('./fixtures');
const { expect } = require('@playwright/test');

//This test suite is designed to measure the baseline of performance for transferrability
// purposes.

test.describe('Baseline Performance Tests', () => {
  test('Zeroed baseline', async ({page, browser}) => {

    await console.time('htmlfloor');
    await page.setContent(`
    <div class="visible">Hello world</div>
    <input type="checkbox" enabled class="enabled">
    `);
    await page.locator('.visible').isVisible();
    await console.timeLog('htmlfloor');
  });
});