function addObserver() {
    console.log('this is being executed');
    window.longtasks = [];
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // `entry` is a PerformanceEntry instance.
        longtasks.push([entry.attribution[0].containerSrc, entry.attribution[0].containerType, entry.attribution[0].name]);
        console.log(entry.entryType);
        console.log(entry.startTime); // DOMHighResTimeStamp
        console.log(entry.duration); // DOMHighResTimeStamp
      }
    });
    // Start observing the entry types you care about.
    observer.observe({entryTypes: ['longtask']});
};

addObserver();

/*
  test.only('LongTasks and PerformanceObserver', async ({page, browser}) => {
    // const client = await page.context().newCDPSession(page);
    // await client.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    await page.addInitScript({
      path: './perf/tests/pw/addObserver.js'
    });
    await page.goto(website);
    await page.waitForTimeout(1000 * 5);
    const longtasks = await page.evaluate(() => window.longtasks);
    console.log(longtasks);

  });
*/
