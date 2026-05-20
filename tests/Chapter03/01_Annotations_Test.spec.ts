//import playwright mode
import { test, expect } from "@playwright/test";


test('Test1', async ({ page }) => {

    await test.step('Navigating to URL', async () => {
        await page.goto('https://github.com/');
        await page.getByRole('link', { name: 'Sign in' }).click();
    });

    await test.step('Entering username and password', async () => {
        await page.getByRole('textbox', { name: 'Username or email address' }).click();
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('abc');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('abc');
    });
    await test.step('Clicking Signin Button ', async () => {
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    });
    await test.step('Validating error message', async () => {
        await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    });



})

//skip test
test.skip('Test2', async ({ page }) => {

    await test.step('Navigating to URL', async () => {
        await page.goto('https://github.com/');
        await page.getByRole('link', { name: 'Sign in' }).click();
    });

    await test.step('Entering username and password', async () => {
        await page.getByRole('textbox', { name: 'Username or email address' }).click();
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('abc');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('abc');
    });
    await test.step('Clicking Signin Button ', async () => {
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    });
    await test.step('Validating error message', async () => {
        await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    });



})



//Only run this test
test.only('Test3', async ({ page }) => {

    await test.step('Navigating to URL', async () => {
        await page.goto('https://github.com/');
        await page.getByRole('link', { name: 'Sign in' }).click();
    });

    await test.step('Entering username and password', async () => {
        await page.getByRole('textbox', { name: 'Username or email address' }).click();
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('abc');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('abc');
    });
    await test.step('Clicking Signin Button ', async () => {
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    });
    await test.step('Validating error message', async () => {
        await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    });




})

