//import playwright mode
import { test, expect } from "@playwright/test";

//Write tests
test('KeyBoard Actions In Playwright', async ({ page }) => {

    //Go to Url

    await page.goto('https://google.com/');

    //Enter action from keyboard

    //  await page.getByRole('combobox', { name: 'Search' }).click();

    // await page.getByRole('combobox', { name: 'Search' }).fill("Playwright with testers talk");

    // await page.getByRole('combobox', { name: 'Search' }).press('Enter');




    //selecting and deleting from search bar using  control+A and delete

    // await page.getByRole('combobox', { name: 'Search' }).click();

    // await page.getByRole('combobox', { name: 'Search' }).fill("Playwright with testers talk");


    // await page.getByRole('combobox', { name: 'Search' }).press('Control+A');
    // await page.getByRole('combobox', { name: 'Search' }).press('Delete');

    //or if it is directly clicking ,not from element
    //await page,keyboard.press('Control+A');

    //await page,keyboard.press('Delete');


    //Press Tab and Enter

     await page.getByRole('combobox', { name: 'Search' }).click();
     await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');




})