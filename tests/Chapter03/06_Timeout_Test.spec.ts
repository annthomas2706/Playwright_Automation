import { test, expect } from '@playwright/test';

test('Timeout Tests', async ({ page }) => {
    test.setTimeout(1*60*1000)
  await page.goto('https://www.youtube.com/');

  await page.getByRole('combobox', { name: 'Search' }).click({timeout:5000});
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright with testers talk');
  await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr');
  await expect(page.getByRole('link', { name: 'Playwright TypeScript by' })).toBeVisible({timeout:5000});
});