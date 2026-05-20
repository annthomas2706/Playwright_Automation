//import playwright mode
import { test, expect } from "@playwright/test";

//Write tests
test('MouseActions In Playwright', async ({ page }) => {

    //Go to Url

    await page.goto('https://google.com/');
    

    // //Left button click on gmail link
    //  await page.getByRole('link', { name: 'Gmail' }).click({button:'left'})

    //  //middle button click on gmail link
    //  await page.getByRole('link', { name: 'Gmail' }).click({button:'middle'})

     //Right button click on gmail link
     await page.getByRole('link', { name: 'Gmail' }).click({button:'right'})

     //Mouse Hover on Search bar
     await page.getByRole('combobox', { name: 'Search' }).hover();

    //Double Click
     await page.getByRole('combobox', { name: 'Search' }).dblclick();
  
    })