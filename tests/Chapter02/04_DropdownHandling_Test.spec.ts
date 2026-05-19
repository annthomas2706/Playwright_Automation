//import playwright mode
import { test, expect } from "@playwright/test";

//Write tests
test('DropDown Handling', async ({ page }) => {

    //Go to Url

    await page.goto('https://demoqa.com/select-menu');
    
     //  Option select by Value
    await page.locator('#oldSelectMenu').selectOption("3");
    //  Option select by Visible Text
    await page.locator('#oldSelectMenu').selectOption("Green");
     //validate options
     await expect(page.locator('#oldSelectMenu>option')).toHaveText(["Red", "Blue", "Green", "Yellow", "Purple", "Black", "White", "Voilet", "Indigo", "Magenta", "Aqua"])



    })