// Import playwright module
import { test, expect } from '@playwright/test';


test('Read ENV file config in playwright', async ({ page }) => {
    // Go to URL
    await page.goto(`${process.env.JQUERY_URL}`);

    // Search with keywords
    await page.goto('https://jqueryui.com/droppable/');
    await page.getByRole('link', { name: 'Demos' }).click();
    await expect(page.locator('h1')).toContainText('jQuery UI Demos');
});