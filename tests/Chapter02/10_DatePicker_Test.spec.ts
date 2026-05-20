import { test, expect } from '@playwright/test';

test('Selecting date value in playwright', async ({ page }) => {

    // Open URL
    await page.goto('https://jqueryui.com/datepicker/');

    // Switch to iframe
    const iframe = page.frameLocator('.demo-frame');

    // Hardcoded date
    // await iframe.locator('#datepicker').fill('12/15/2024');



    // Selecting current date
    // await iframe.locator('#datepicker').click();
    // await iframe.locator('.ui-datepicker-today').click();



    // Selecting past date
    // await iframe.locator('#datepicker').click();
    // await iframe.locator('[title="Prev"]').click();
    // await iframe.locator('text="15"').click();



    // Selecting future date dynamically

    await iframe.locator('#datepicker').click();
    await iframe.locator('[title="Next"]').click();
    await iframe.locator('text="15"').click();

});