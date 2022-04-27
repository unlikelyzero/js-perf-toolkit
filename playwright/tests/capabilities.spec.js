const { test, browser } = require('./fixtures');
const { expect } = require('@playwright/test');

const fs = require('fs');
const path = require('path');


const localImagePath = path.join(__dirname, "./assets/style.css");


test.describe('Demo Capabilities', () => {
  test('Access the running devtools and request CDP Performance metrics', async ({ page, browser }) => {
    
    // Create a new connection to an existing CDPSession to enable Performance Measurements
    const client = await page.context().newCDPSession(page);
    // Tell the DevTools session to record performance metrics
    // https://chromedevtools.github.io/devtools-protocol/tot/Performance/#method-getMetrics
    await client.send('Performance.enable'); 
    
    // Go to https://www.google.com/
    await page.goto('https://www.google.com/');
    // Click [aria-label="Search"]
    await page.click('[aria-label="Search"]');
    // Fill [aria-label="Search"]
    await page.fill('[aria-label="Search"]', 'playwright');
    // Press Enter
    await Promise.all([
      page.waitForNavigation(),
      page.press('[aria-label="Search"]', 'Enter')
    ]);

    console.log("\n==== Devtools: Performance.getMetrics ====\n");
    let performanceMetrics = await client.send('Performance.getMetrics');
    console.log( performanceMetrics.metrics );

  });

  test('Capture Trace during test execution and demonstrate marks', async ({ page, browser }) => { 

    console.log("\n==== Devtools: startTracing ====\n");
    await browser.startTracing(page, {path: './trace.json', screenshots: true});

    // Go to https://www.google.com/    
    await page.goto('https://www.google.com/');

    //Use performance.mark API
    await page.evaluate(() => (window.performance.mark("perf:start")));

    // Click [aria-label="Search"]
    await page.click('[aria-label="Search"]');
    // Fill [aria-label="Search"]
    await page.fill('[aria-label="Search"]', 'playwright');

    //Performance.mark API
    await page.evaluate(() => (window.performance.mark("perf:stop")));

    //Performance.measure API
    await page.evaluate(() => (window.performance.measure("overall","perf:start","perf:stop")));

    //Get All Performance Marks Including Google's
    const getAllMarksJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType("mark")));
    const getAllMarks = JSON.parse(getAllMarksJson);
    console.log('window.performance.getEntriesByType("mark")', getAllMarks);

    // Press Enter
    await Promise.all([
      page.waitForNavigation(),
      page.press('[aria-label="Search"]', 'Enter')
    ]);

    console.log("\n==== Devtools: stopTracing ====\n");
    await browser.stopTracing();

  });

  test('Add DevTools Network Delay', async ({ page, browser }) => { 
    const client = await page.target().createCDPSession();
    await client.send('Network.enable')
    await client.send('Network.emulateNetworkConditions', {
      latency: 500
    })

    // Go to https://www.google.com/    
    await page.goto('https://www.google.com/');

    // Click [aria-label="Search"]
    await page.click('[aria-label="Search"]');
    // Fill [aria-label="Search"]
    await page.fill('[aria-label="Search"]', 'playwright');

    // Press Enter
    await Promise.all([
      page.waitForNavigation(),
      page.press('[aria-label="Search"]', 'Enter')
    ]);

  });

  test.only('Route Image Replacement', async ({ page, browser, context }) => { 
    await context.addInitScript(() => delete window.navigator.serviceWorker);

    // URL to replace
    const remoteFilePath = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';
    // Local (override) file to use instead
    const localFilePath = path.join(__dirname, "./bingLogo.png");

    await page.route('https://www.google.com/images/branding/googlelogo/2x/*.png', (route) => {

      const url = route.request().url();
      console.log(`Intercepted ${url}`);

      if (url === remoteFilePath && !url.match(localFilePath)) {
        route.fulfill({
          body: fs.readFileSync(
            localFilePath
          )
        });
      } else {
        route.continue();
      }
    })
    // Go to https://www.google.com/    
    await page.goto('https://www.google.com/');

    // Click [aria-label="Search"]
    await page.click('[aria-label="Search"]');
    // Fill [aria-label="Search"]
    await page.fill('[aria-label="Search"]', 'playwright');

    // Press Enter
    await Promise.all([
      page.waitForNavigation(),
      page.press('[aria-label="Search"]', 'Enter')
    ]);

    await page.screenshot();
  });

});