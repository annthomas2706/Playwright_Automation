// Import playwright module
import { test, expect } from '@playwright/test';

test('Mock API response in playwright', async ({ page }) => {

    // Mock API response
    await page.route('*/**/api/v1/fruits', async route => {//UI sends request and playwright inetcepts ut
        const response = await route.fetch();//fetch will send request from PW to server and return back response to PW  
        const json = await response.json();
        json.push({ name: 'playwright typescript by testers talk', id: 12 });//append the reposne with mocked data using push
        json.push({ name: 'playwright javascript by testers talk', id: 13 });
        json.push({ name: 'cypress by testers talk', id: 14 });
        json.push({ name: 'api testing by testers talk', id: 15 });

        await route.fulfill({ response, json });//pw sends the response back to ui using fulfill
    })

    // Go to URL
    await page.goto('https://demo.playwright.dev/api-mocking/');

    // Validate text
    await expect(page.getByText('playwright typescript by testers talk')).toBeVisible();
    await expect(page.getByText('playwright javascript by testers talk')).toBeVisible();
    await expect(page.getByText('cypress by testers talk')).toBeVisible();
    await expect(page.getByText('api testing by testers talk')).toBeVisible();
});