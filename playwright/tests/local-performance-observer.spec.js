const pw = require('playwright');
const { test, expect } = require('@playwright/test');

test('basic test', async () => {
  const browser = await pw.chromium.connect({
    wsEndpoint: 'ws://localhost:3003',
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://playwright.dev/');
  const name = await page.innerText('.navbar__title');
  expect(name).toBe('Playwright');
});