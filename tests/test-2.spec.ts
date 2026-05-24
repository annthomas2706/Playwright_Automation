import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://jqueryui.com/');
  await page.getByRole('searchbox', { name: 'Search jQuery UI' }).click();
  await page.getByRole('searchbox', { name: 'Search jQuery UI' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search jQuery UI' }).fill('D');
  await page.getByRole('searchbox', { name: 'Search jQuery UI' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search jQuery UI' }).fill('Demos');
  await page.getByRole('link', { name: 'jQuery UI Demos › Interactions' }).click();
  await page.locator('#content').getByRole('link', { name: 'Droppable' }).click();
  await expect(page.locator('h1')).toContainText('Droppable');
});