// Import playwright module
import { test, expect } from '@playwright/test';
test.describe('SmokeTesting', () => {
    // Write a test
    test('Test 1', async ({ page }) => {
        await page.goto('https://www.youtube.com/');

        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill('playwright with testers talk');
        await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr');
        await expect(page.getByRole('link', { name: 'Playwright TypeScript by' })).toBeVisible();

    })
});



test.describe('RegressionTesting', () => {
    // Write a test
    test('Test 2', async ({ page }) => {
        // Go to URL
        await page.goto('https://www.youtube.com/');

        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill('playwright with testers talk');
        await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr');
        await expect(page.getByRole('link', { name: 'Playwright TypeScript by' })).toBeVisible();
    });


    // Write a test
    test('Test 3', async ({ page }) => {
        // Go to URL
        await page.goto('https://www.youtube.com/');

        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill('playwright with testers talk');
        await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr');
        await expect(page.getByRole('link', { name: 'Playwright TypeScript by' })).toBeVisible();
    });


    test('Test 4', async ({ page }) => {
        // Go to URL
        await page.goto('https://www.youtube.com/');

        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill('playwright with testers talk');
        await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr');
        await expect(page.getByRole('link', { name: 'Playwright TypeScript To' })).toBeVisible();
    })
});