const { test, browser } = require('./fixtures');
const { expect } = require('@playwright/test');
const { influx } = require('./influxUtils');

//This test suite is designed to measure the baseline of performance for transferrability
// purposes.

test.describe('Baseline Performance Tests', () => {
  test('Zeroed baseline', async ({page, browser}) => {

    await console.time('htmlfloor');
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
    const zeroed = console.timeLog('htmlfloor');
    await console.log(zeroed);

    console.log(measure.entryType);
    console.log(influx.write);
    influx.write('Performance', 'Zeroed' , zeroed, Date.now());
    influx.close(); //neva4get
  });
});