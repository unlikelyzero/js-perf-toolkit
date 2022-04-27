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


    // console.log("\n==== performance.measure our marks! ====\n");
    await page.evaluate(() => (window.performance.measure("overall","perf:start","perf:stop")));

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




  test.skip('Demo Capabilities', async ({ page, browser }) => {
    
    // Create a new connection to an existing CDPSession to enable Performance Measurements
    const client = await page.context().newCDPSession(page);
    await client.send('Performance.enable');

    console.log("\n==== Devtools: Performance.getMetrics ====\n");
    let performanceMetrics = await client.send('Performance.getMetrics');
    console.log( performanceMetrics.metrics );



    console.log("\n==== Browserless: gather heapsnapshot ====\n");
    //Get startHeadSnapShot
    console.log('Gathering start.heapsnapshot')
    await fetch(heapDumpUrl)
    .then(res => res.text())
    .then(data => {
        fs.writeFile(startHeapSnapShot, data, err => {
            if (err) {
                console.error(err)
                return;
            }
            console.log('Success: saved file', startHeapSnapShot);
        });
    });


  
    

    console.log("\n==== Browserless: gather heapsnapshot2 ====\n");
    //Get end Heapsnapshot
    console.log('Gathering end.heapsnapshot')
    await fetch(heapDumpUrl)
    .then(res => res.text())
    .then(data => {
        fs.writeFile(endHeapSnapShot, data, err => {
            if (err) {
                console.error(err)
                return;
            }
            console.log('Success: saved file', endHeapSnapShot);
        });
    }), { timeout: 120000 };

    await page.goto('/');

    // Inject Performance Observer
    // await page.addScriptTag({type: 'module', url: 'https://unpkg.com/@sumup/performance-observer@1.0.2/dist/performance-observer.es5.min.js?module'})
    // await page.waitForFunction(() => window.PerformanceObserverEntryList);
    
    //Example of setting arbitrary mark on performance timeline
    await page.evaluate(() => JSON.stringify(window.performance.mark("perf:start")));

    await page.waitForLoadState('load');
    await console.timeLog('cold:load');
    await page.waitForLoadState('networkidle');
    await console.timeLog('cold:idle');

      // Executes Navigation API within the page cont
    // await page.evaluate(() => JSON.stringify(window.performance.mark("perf:start")));
    // await page.evaluate(function() {window.performance.mark("perf:start")});

    //Reloading to simulate "Warm Cache"
    await console.time('reload:idle');
    await console.time('reload:load');

    await page.reload();
    await page.waitForLoadState('load')
    await console.timeLog('reload:load');
    await page.waitForLoadState('networkidle');
    await console.timeLog('reload:idle');

    await page.evaluate(() => (window.performance.mark("perf:reloaded")));

    console.log("\n==== [UNDER CONSTRUCTION] performance.measure our marks! ====\n");
    //await page.evaluate(() => (window.performance.measure("overall","perf:start","perf:reloaded")));

    console.log("\n==== Devtools: stopTracing ====\n");
    await browser.stopTracing();

    console.log("\n==== Gather all resource timing and filter for svg ====\n");
    const resourceTimingJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType('resource')));

    //Get Resource Timing for svg elements
    const resourceTiming = JSON.parse(resourceTimingJson);
    const logoResourceTiming = resourceTiming.find(element => element.name.includes('.svg'));
    console.log('performance.resource .svg timing',logoResourceTiming);

    console.log("\n==== Gather all resource timing for navigation ====\n");
    //Get Performance Timing
    const performanceTimingJson = await page.evaluate(() => JSON.stringify(window.performance.timing));
    const performanceTiming = JSON.parse(performanceTimingJson);
  
    console.log('performance.window.timing', performanceTiming);

    const longTaskTimingJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType('longtask')));

    const longTaskTiming = JSON.parse(longTaskTimingJson);
    console.log('longtask timing',longTaskTiming);

    console.log("\n==== [UNDER CONSTRUCTION] Gather all longTask events ====\n");
    // //FIX Long Task API Attempt
    // const longTaskTimingJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType('longtask')));

    // const longTaskTiming = JSON.parse(longTaskTimingJson);
    // console.log('longtask timing',longTaskTiming);

    // //FIX Long Task API Attempt 2
    // const results = await page.evaluate(function() {return window.longtasks});
	  // await console.log(results);
    // let longTaskResults = await page.evaluate(function() {return window.longtasks});
    // console.log('long task results', JSON.stringify(longTaskResults));

  });
});