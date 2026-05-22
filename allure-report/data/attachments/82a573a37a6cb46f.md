# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter04\03_TestReports_Test.spec.ts >> SmokeTesting >> Test 1
- Location: tests\Chapter04\03_TestReports_Test.spec.ts:5:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Playwright TypeScript by' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('link', { name: 'Playwright TypeScript by' })

```

```yaml
- button "Play":
  - img
- slider "Seek slider" [disabled]
- slider "Click or scroll the panel for the precise seeking." [disabled]
- button "Pause (k)":
  - img
- button "Mute (m)":
  - img
- slider "Volume"
- button "0 Minutes 0 Seconds of 0 Minutes 45 Seconds": 0:00 / 0:45
- button "Subtitles/closed captions unavailable":
  - img
- button "Settings":
  - img
- button "Theater mode (t)":
  - img
- button "Full screen (f)":
  - img
- banner:
  - button "Guide"
  - link:
    - /url: /
    - img
  - search:
    - combobox [expanded]
    - button "Search"
```

# Test source

```ts
  1  | // Import playwright module
  2  | import { test, expect } from '@playwright/test';
  3  | test.describe('SmokeTesting', () => {
  4  |     // Write a test
  5  |     test('Test 1', async ({ page }) => {
  6  |         await page.goto('https://www.youtube.com/');
  7  | 
  8  |         await page.getByRole('combobox', { name: 'Search' }).click();
  9  |         await page.getByRole('combobox', { name: 'Search' }).fill('playwright with testers talk');
  10 |         await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr');
> 11 |         await expect(page.getByRole('link', { name: 'Playwright TypeScript by' })).toBeVisible();
     |                                                                                    ^ Error: expect(locator).toBeVisible() failed
  12 | 
  13 |     })
  14 | });
  15 | 
  16 | 
  17 | 
  18 | test.describe('RegressionTesting', () => {
  19 |     // Write a test
  20 |     test('Test 2', async ({ page }) => {
  21 |         // Go to URL
  22 |         await page.goto('https://www.youtube.com/');
  23 | 
  24 |         await page.getByRole('combobox', { name: 'Search' }).click();
  25 |         await page.getByRole('combobox', { name: 'Search' }).fill('playwright with testers talk');
  26 |         await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr');
  27 |         await expect(page.getByRole('link', { name: 'Playwright TypeScript by' })).toBeVisible();
  28 |     });
  29 | 
  30 | 
  31 |     // Write a test
  32 |     test('Test 3', async ({ page }) => {
  33 |         // Go to URL
  34 |         await page.goto('https://www.youtube.com/');
  35 | 
  36 |         await page.getByRole('combobox', { name: 'Search' }).click();
  37 |         await page.getByRole('combobox', { name: 'Search' }).fill('playwright with testers talk');
  38 |         await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr');
  39 |         await expect(page.getByRole('link', { name: 'Playwright TypeScript by' })).toBeVisible();
  40 |     });
  41 | 
  42 | 
  43 |     test('Test 4', async ({ page }) => {
  44 |         // Go to URL
  45 |         await page.goto('https://www.youtube.com/');
  46 | 
  47 |         await page.getByRole('combobox', { name: 'Search' }).click();
  48 |         await page.getByRole('combobox', { name: 'Search' }).fill('playwright with testers talk');
  49 |         await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr');
  50 |         await expect(page.getByRole('link', { name: 'Playwright TypeScript To' })).toBeVisible();
  51 |     })
  52 | });
```