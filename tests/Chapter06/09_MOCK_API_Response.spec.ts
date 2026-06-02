// Import playwright module
import { test, expect } from '@playwright/test';


test('Mock API request in playwright', async ({ page }) => {

    // Mock API request
    await page.route('*/**/api/v1/fruits', async (route)=> {//we have specified the base url as */**/ since it is generic we can use like that */
       
       //request send from ui and pw intercepted it , then pw craetes mocked response
        const json = [
            { name: 'Red Fruit' },
            { name: 'Yellow Fruit' },
            { name: 'Green Fruit' },
            { name: 'Blue Fruit'},
        ];
        await route.fulfill({ json });//sending response from pw to ui
    })

    // Go to URL
    await page.goto('https://demo.playwright.dev/api-mocking/');

    // Validate text
    await expect(page.getByText('Red Fruit')).toBeVisible();
    await expect(page.getByText('Yellow Fruit')).toBeVisible();
    await expect(page.getByText('Green Fruit')).toBeVisible();
    await expect(page.getByText('Blue Fruit')).toBeVisible();
});