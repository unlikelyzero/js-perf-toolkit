const lighthouse = require('lighthouse')
// Full TypeScript support for both puppeteer and the DOM
export default async ({ page }: { page: Page }) => {

  // Full puppeteer API is available
  await page.goto('http://host.docker.internal:6789');

  await page.waitForSelector('body > #text > a')
  await Promise.all([
    page.click('body > #text > a'),
    page.waitForNavigation(),
  ]);
    const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.memory))
  );
  console.log(performanceTiming);

  // Logs show up in the browser's devtools
  console.log(`I show up in the page's console!`);

  const topLinks = await page.evaluate(() => {
    const results = document.querySelectorAll('a');
    return [...results].map(el => [el.innerText, el.getAttribute('href')]);
  });

  // Can pause by injecting a "debugger;" statement
  await page.evaluate(() => { debugger; });

  console.table(topLinks);
};