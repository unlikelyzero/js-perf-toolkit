const  { expect } = require('@playwright/test');
const  { test, browser } = require('./fixtures.js');

test('basic test', async ({ page, browser }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});