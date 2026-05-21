import { test, expect } from '@playwright/test';

const searches = ["abc", "def", "ghi"];

for (const search of searches) {
  test(`Parametrize Tests in PlayWright ${search}`, async ({ page }) => {

    await page.goto('https://www.google.com/');

    await page.getByRole('combobox', { name: 'Search' }).click();

    await page.getByRole('combobox', { name: 'Search' }).fill(search);

  });
}