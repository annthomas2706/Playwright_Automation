//import playwright mode
import { test, expect } from "@playwright/test";

//Write tests
test('Record at Cursor Test', async ({ page }) => {

    //Go to Url

    await page.goto('https://www.google.com/?zx=1779095874709');
    //Search with keywords
    await page.getByLabel('Search', { exact:true }).fill('playwright by testers talk');
    await page.getByLabel('Search', { exact: true }).press('Enter');
    //click playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk'}).first().click();
    //validate title
    await expect(page).toHaveTitle('Playwright by Testers Talk - YouTube');
    await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
    await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();
    await expect(page.getByLabel('Playwright Tutorial Full Course 2024').locator('#video-title')).toContainText('Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial');
    await expect(page.getByLabel('Playwright API Testing Tutorial Crash Course 2024').locator('#video-title')).toContainText('Playwright API Testing Tutorial Crash Course 2024');

})