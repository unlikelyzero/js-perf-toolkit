const { test, browser } = require('./fixtures');
const { expect } = require('@playwright/test');

//This test suite is designed to measure the baseline of performance for transferrability
// purposes.

test.describe('Baseline Performance Tests', () => {
  test('Zeroed baseline', async ({page, browser}) => {

    await console.time('htmlfloor');
    await page.setContent(`
    <div class="visible">Hello world</div>
    <input type="checkbox" enabled class="enabled">
    `);
    await page.locator('.visible').isVisible();
    await console.timeLog('htmlfloor');
  });
});

/*
Example output from running this test 50x:


  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (2s)
htmlfloor: 85.922ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 99.194ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 72.545ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 59.577ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 68.636ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 74.77ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 71.038ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 70.09ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 68.657ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 57.2ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 69.429ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 84.199ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 73.039ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 72.93ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 58.18ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 77.522ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 54.095ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 71.071ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 72.019ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 79.432ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 67.809ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 74.899ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 54.268ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 77.018ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 65.866ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 66.524ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 54.205ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 72.134ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 57.835ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 58.624ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 117.735ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 70.716ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 71.982ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 80.7ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 56.118ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 66.857ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 54.95ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 83.009ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 83.164ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 73.895ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 76.928ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 73.632ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 78.305ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 73.716ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 74.934ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 69.667ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 78.358ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 128.104ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 78.004ms
  ✓  [local-chrome] › tests/zeroed.perf.spec.js:23:3 › Baseline Performance (1s)
htmlfloor: 67.591ms
*/
