const { test, browser } = require('./fixtures');
const { expect } = require('@playwright/test');

const fetch = require('node-fetch');
const fs = require('fs');

const heapDumpUrl = 'http://localhost:3003/heapdump'

const startHeapSnapShot = './start.heapsnapshot'
const endHeapSnapShot = './end.heapsnapshot'

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

  test.only('Capture Trace during test execution and demonstrate marks', async ({ page, browser }) => { 

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

  test('API Manipulation', async ({ page, browser, context }) => { 
    await context.addInitScript(() => delete window.navigator.serviceWorker);

    // Go to https://www.google.com/    
    await page.goto('https://www.google.com/');

    // Click [aria-label="Search"]
    await page.click('[aria-label="Search"]');
    // Fill [aria-label="Search"]
    await page.fill('[aria-label="Search"]', 'playwright');

    await page.route('**/search**', route => route.fulfill(
      {
        body: 'Not found!'
      })
    );

    // Press Enter
    await Promise.all([
      page.waitForNavigation(),
      page.press('[aria-label="Search"]', 'Enter')
    ]);
    await page.pause();
  });

});