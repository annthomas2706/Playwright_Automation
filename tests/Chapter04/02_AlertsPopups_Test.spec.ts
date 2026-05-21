// Import playwright module
import { test, expect } from '@playwright/test';


test('Handling Alert popups in Playwright ', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
    

    //By default alert dialogs are automaticaaly dismisssed by PW of not handled,so it wont stuck test
    //If we want to hanndle it,need to use page.on('event', callbackFunction) method to listen to the event.
    //Here event is alert dialog and page.on() takes 2 arguments first is event name and second is callbak it tells what to perfrm if this event happens
    //We can have page.on() or page.once()
    //page.on() listens and handles an event every time it occurs, while page.once() handles the event only the first time and then stops listening.


    page.on('dialog', dialog => {
        //accept dialog
        dialog.accept();
        //print dialog message, through dialog.message()
        console.log(`Alert message is : ${dialog.message()}`);
        //print type of dialog , if its alert, confirm or prompt
        console.log(`Dialog type is : ${dialog.type()}`);
    })
    await page.getByText('See an example alert', { exact: true }).click();
});


test('Handling Popups in Playwright ', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        console.log(`Dialog type is : ${dialog.type()}`);
        dialog.dismiss();
        console.log(`Popup message is : ${dialog.message()}`);
    })
    await page.getByText('See a sample confirm', { exact: true }).click();
});

// Write a test
test('Handling Prompt Popups in Playwright ', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    //To send text in dialog, we need to use async(dialog) as event listener then send using await dialog.accept()
    page.once('dialog', async (dialog) => {
        console.log(`Dialog type is : ${dialog.type()}`);
        console.log(`Prompt popup message is : ${dialog.message()}`);
        //to write to textbox inside alert we need to pass the value inside dialog.accept
        await dialog.accept('playwright');
    })
    await page.getByText('See a sample prompt', { exact: true }).click();
});