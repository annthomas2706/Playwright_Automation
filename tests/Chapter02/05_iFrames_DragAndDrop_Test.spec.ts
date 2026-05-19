//import playwright mode
import { test, expect } from "@playwright/test";

//Write tests
test('iFrame and DragAndDrop', async ({ page }) => {

    //Go to Url

    await page.goto('https://jqueryui.com/droppable/');
    

    //iframe
    const iFrame=await page.frameLocator('.demo-frame');

     //source element
    const source=await iFrame.locator('#draggable');

    //destination element
    const destination=await iFrame.locator('#droppable');

    //drag and drop
    source.dragTo(destination);
    })