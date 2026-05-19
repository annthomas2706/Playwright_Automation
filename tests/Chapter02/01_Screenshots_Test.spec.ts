//import playwright mode
import { test, expect } from "@playwright/test";

//Write tests
test('Capture Screenshots in Playwright', async ({ page }) => {

    //Go to Url

    await page.goto('https://www.youtube.com/@testerstalk');
    //element screenshot
     await page.locator('#page-header-container').screenshot({path:'./screenshots/ElementScreenshot.png'})

     //Current Visible Page screenshot
     await page.screenshot({path:'./screenshots/PageScreenshot.png'})


      //Full Page screenshot

       await page.screenshot({path:'./screenshots/PageScreenshot.png',fullPage:true})


    })