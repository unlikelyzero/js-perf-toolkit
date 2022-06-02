const { test } = require('./fixtures');
const { expect } = require('@playwright/test');
const { influx } = require('./influxUtils');


test.describe('feature foo', () => {

  test('my test', async ({ page }) => {
    await page.goto('/');
    await influx.write(
      'test_mesurement',
      { tag1: 'tag 1 value' },
      { field1: 12, field2: 2.3 },
      Date.now()
    );
  });
});