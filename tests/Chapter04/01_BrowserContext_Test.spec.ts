import { test, expect } from '@playwright/test';

test('Browser Context', async ({ page, browser }) => {
    await page.goto('https://www.youtube.com/');

    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright with testers talk');
    await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr');
    await expect(page.getByRole('link', { name: 'Playwright TypeScript by' })).toBeVisible();
    //create new browser context
    const newBrowser = await browser.newContext();

    //create new page on new browser
    const newPage = await newBrowser.newPage();

    //new browser session

    await newPage.goto('https://www.youtube.com/');

    await newPage.getByRole('combobox', { name: 'Search' }).click();
    await newPage.getByRole('combobox', { name: 'Search' }).fill('playwright with testers talk');
    await newPage.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr');
    await expect(newPage.getByRole('link', { name: 'Playwright TypeScript by' })).toBeVisible();

    //new tab in second browser
    const newTab = await newBrowser.newPage();
    await newTab.goto('https://www.youtube.com/');

});
