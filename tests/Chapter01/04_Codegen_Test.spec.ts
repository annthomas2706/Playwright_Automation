import { test, expect } from '@playwright/test';

test('Codegen tests1',{tag:['@playWrightWithJenkins']}, async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright with testers talk');
  await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr');
  await expect(page.getByRole('link', { name: 'Playwright TypeScript by' })).toBeVisible();
});


//to fail tests
test('Codegen tests2',{tag:['@playWrightWithJenkins']}, async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright with testers talk');
  await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr');
  await expect(page.getByRole('link', { name: 'Playwright TypeScript ***' })).toBeVisible();
});