import { test, expect } from '@playwright/test'

// Write a test
test('Locators in Playwright', async ({ page }) => {

    // Go to URL
    await page.goto('https://github.com/');


    // GetByLabel
     await page.getByLabel('Homepage', { exact: true }).first().click();

    // GetByRole
     await page.getByRole('link', { name: 'Sign in' }).click();


      // by id
     await page.locator('#login_field').fill('maryannthomas1996@gmail.com');

     
      // by id
     await page.locator('#password').fill('Spykidannthomas@123');


    await page.getByRole('button', { name: 'Sign in' }).click();
    // GetByAltText for images;
     //await page.getByAltText('Ann Mary Thomas').click();
     await page.locator('img[data-testid="github-avatar"]').click();
   // await page.locator('.prc-Avatar-Avatar-0xaUi').click();
    
      // GetByText
      await page.getByText('Profile', {exact: true}).click();


    // GetByTestId
    //Here diff tabs like Overview, repo, Projects all has got common testId attribute here it is 'data-tab-item' which is added to the config.ts
    //projects is 1 value of that attribute
    await page.getByTestId("projects").first().click();
    //projects is 1 value of that attribute
   // await page.getByTestId("repositories").first().click();


//      await page.goto('https://www.google.com/');
  
//       GetByTitle--tooltip value title,Search bar in google
//       await page.getByTitle('Serach').click();


});