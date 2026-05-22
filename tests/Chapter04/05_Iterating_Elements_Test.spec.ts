// Import playwright module
import { test, expect } from '@playwright/test';


test('Iterating matching elements in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://github.com/annthomas2706');



    /*$$() is used to get all matching elements immediately as an array, but it can become outdated if the page changes later.
    
    Access elements using:
    elements[0]
    elements[1]*/

    // For of loop
    const repositoryLinks = await page.$$('.repo');
    for (const repositoryLink of repositoryLinks) {
        const text = await repositoryLink.textContent();
        console.log(`Text from 1st for loop: ${text}`);
    }

    console.log(`==========================`);

    // For loop using index
    for (let index = 0; index < repositoryLinks.length; index++) {
        const text = await repositoryLinks[index].textContent();
        console.log(`Text from 2nd for loop: ${text}`);
    }

    console.log(`==========================`);



    //locator() is used to dynamically find elements and it always checks the latest DOM, so it is more stable and recommended in Playwright.

    /*Access elements using:
    locator.nth(index)
    locator.first()
    locator.last()
    await locator.all()*/
    // For loop using nth() method
    const repositoryLinks2 = page.locator('.repo');
    const count = await repositoryLinks2.count();
    for (let index = 0; index < count; index++) {
        const text = await repositoryLinks2.nth(index).textContent();
        console.log(`Text from 3rd for loop: ${text}`);
    }
});