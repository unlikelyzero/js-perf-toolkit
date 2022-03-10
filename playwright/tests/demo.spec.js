const { test, browser } = require('./fixtures');
const { expect } = require('@playwright/test');

const fetch = require('node-fetch');
const fs = require('fs');

const heapDumpUrl = 'http://localhost:3003/heapdump'

const startHeapSnapShot = './start.heapsnapshot'
const endHeapSnapShot = './test-results/end.heapsnapshot'

test.describe('feature foo', () => {
  test('my test', async ({ page, browser }) => {
    
    // Create a new connection to an existing CDPSession to enable Performance Measurements
    const client = await page.context().newCDPSession(page);
    await client.send('Performance.enable');

    console.log("\n==== Devtools: Performance.getMetrics ====\n");
    let performanceMetrics = await client.send('Performance.getMetrics');
    console.log( performanceMetrics.metrics );

    //await browser.startTracing(page,{path:`trace.json`,screenshots:true, categories: ['devtools.timeline']});
    await browser.startTracing(page, {path: './test-results/trace.json', screenshots: true});

    // //Get startHeadSnapShot
    // console.log('Gathering start.heapsnapshot')
    // await fetch(heapDumpUrl)
    // .then(res => res.text())
    // .then(data => {
    //     fs.writeFile(startHeapSnapShot, data, err => {
    //         if (err) {
    //             console.error(err)
    //             return;
    //         }
    //         console.log('Success: saved file', startHeapSnapShot);
    //     });
    // });

    //Baseline page measurement of HTML
    await console.time('htmlfloor');
    //Create a simple version of 
    await page.setContent(`
    <div class="visible">Hello world</div>
    <div style="display:none" class="hidden"></div>
    <div class="editable" editable>Edit me</div>
    <input type="checkbox" enabled class="enabled">
    <input type="checkbox" disabled class="disabled">
    <input type="checkbox" checked class="checked">
    <input type="checkbox" class="unchecked">
    `);

    await page.locator('.visible').isVisible();
    await console.timeLog('htmlfloor');

    await console.time('cold:plotenabled');
    await console.time('cold:load');
    await console.time('cold:idle');

    // //Get end Heapsnapshot
    // console.log('Gathering end.heapsnapshot')
    // await fetch(heapDumpUrl)
    // .then(res => res.text())
    // .then(data => {
    //     fs.writeFile(endHeapSnapShot, data, err => {
    //         if (err) {
    //             console.error(err)
    //             return;
    //         }
    //         console.log('Success: saved file', endHeapSnapShot);
    //     });
    // }), { timeout: 120000 };

    await page.goto('/');

    await page.addScriptTag({type: 'module', url: 'https://unpkg.com/@sumup/performance-observer@1.0.2/dist/performance-observer.es5.min.js?module'})
    await page.waitForFunction(() => window.PerformanceObserverEntryList);
    
    //Example of setting arbitrary mark on performance timeline
    // await page.evaluate(() => (window.performance.mark("perf:start")));

    await page.waitForLoadState('load');
    await console.timeLog('cold:load');
    await page.waitForLoadState('networkidle');
    await console.timeLog('cold:idle');

      // Executes Navigation API within the page cont
    await page.evaluate(() => JSON.stringify(window.performance.mark("perf:start")));

    // await page.evaluate(function() {window.performance.mark("perf:start")});


    //Reloading to simulate "Warm Cache"
    await console.time('reload:plotenabled');
    await console.time('reload:idle');
    await console.time('reload:load');

    await page.reload();
    await page.waitForLoadState('load')
    await console.timeLog('reload:load');
    await page.waitForLoadState('networkidle');
    await console.timeLog('reload:idle');

    await page.evaluate(() => (window.performance.mark("perf:reloaded")));

    await browser.stopTracing();


    const resourceTimingJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType('resource')));

    //Get Resource Timing for svg elements
    const resourceTiming = JSON.parse(resourceTimingJson);
    const logoResourceTiming = resourceTiming.find(element => element.name.includes('.svg'));
    console.log('svg timing',logoResourceTiming);

    //Get Performance Timing
    const performanceTimingJson = await page.evaluate(() => JSON.stringify(window.performance.timing));
    const performanceTiming = JSON.parse(performanceTimingJson);
  
    console.log('window timing', performanceTiming);

    // //FIX Long Task API Attempt
    // const longTaskTimingJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType('longtask')));

    // const longTaskTiming = JSON.parse(longTaskTimingJson);
    // console.log('longtask timing',longTaskTiming);

    // //FIX Long Task API Attempt 2
    // const results = await page.evaluate(function() {return window.longtasks});
	  // await console.log(results);


  });
});