const { test, browser } = require('./fixtures');
const { expect } = require('@playwright/test');

test.describe('Basic Google Search', () => {
  test('Basic Google Search', async ({ page, browser }) => {

      // Go to https://www.google.com/
  await page.goto('https://www.google.com/');
  // Click [aria-label="Search"]
  await page.click('[aria-label="Search"]');
  // Fill [aria-label="Search"]
  await page.fill('[aria-label="Search"]', 'playwright');
  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.google.com/search?q=playwright&source=hp&ei=fgJjYprIDpfL0PEPn6COSA&iflsig=AHkkrS4AAAAAYmMQjhW1giF3oINn91kfb6MtqnHZBt3B&ved=0ahUKEwia_6qmtKj3AhWXJTQIHR-QAwkQ4dUDCAo&uact=5&oq=playwright&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMggIABCABBCxAzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyBAgAEAMyCwguEIAEEMcBEK8BMgUIABCABDIOCC4QgAQQsQMQxwEQ0QM6DggAEI8BEOoCEIwDEOUCOhQILhCPARDHARCvARDqAhCMAxDlAjoOCC4QjwEQ6gIQjAMQ5QI6CwguEIAEEMcBEKMCOhEILhCABBCxAxCDARDHARDRAzoLCC4QgAQQsQMQgwE6DgguEIAEELEDEMcBEKMCOggILhCxAxCDAToFCC4QgAQ6CAguEIAEENQCOhEILhCABBCxAxCDARDHARCjAjoICAAQsQMQgwE6CAgAEIAEEMkDOgUIABCSAzoFCAAQsQNQyylYl0BggExoAXAAeAGAAYYCiAHbB5IBBTguMC4ymAEAoAEBsAEK&sclient=gws-wiz' }*/),
    page.press('[aria-label="Search"]', 'Enter')
  ]);
    
  });
});