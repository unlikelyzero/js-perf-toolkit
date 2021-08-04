const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.connect({
        browserWSEndpoint: `ws://localhost:3003`,
      });
  const page = await browser.newPage()
  const metrics = await page.metrics();
    await page.goto('http://host.docker.internal:6789');
  
    await page.waitForSelector('body > #text > a')
  
    await Promise.all([
      page.click('body > #text > a'),
      page.waitForNavigation(),
    ]);
  
    const performanceTiming = JSON.parse(
        await page.evaluate(() => JSON.stringify(window.performance))
    );
    console.log('performanceTiming', performanceTiming)
  
     // const performanceMeasurement = await page.evaluate(() => JSON.stringify(window.performance));
    //console.table(performanceMeasurement);
    console.info('puppeteer metrics', metrics);
  
    const performanceMemory = JSON.parse(
        await page.evaluate(() => JSON.stringify(window.performance.memory))
    );
    
    console.info('performanceMemory', performanceMemory);
    await page.close();
    await browser.close();
})()