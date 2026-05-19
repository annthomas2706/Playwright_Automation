//import playwright mode
import { test, expect } from "@playwright/test";

//Write tests
test('First PlayWright Test Script', async ({ page }) => {

    //Go to Url

    await page.goto('https://www.google.com/?zx=1779095874709');
    //Search with keywords
    await page.getByLabel('Search', { exact:true }).fill('playwright by testers talk');
    await page.getByLabel('Search', { exact: true }).press('Enter');
    //click playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk'}).first().click();
    //validate title
    await expect(page).toHaveTitle('Playwright by Testers Talk - YouTube');

})