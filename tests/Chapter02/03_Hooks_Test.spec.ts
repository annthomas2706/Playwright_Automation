import { test, expect } from '@playwright/test';


test.beforeAll(async () => {
    console.log("before all test")
})

test.afterAll(async () => {
    console.log("after all test")
})

test.beforeEach(async ({ page }) => {
    console.log("before each test")
    await test.step('Navigating to URL', async () => {
        await page.goto('https://github.com/');
        await page.getByRole('link', { name: 'Sign in' }).click();
    })

})

test.afterEach(async () => {
    console.log("after each test")
})


test('test 1', async ({ page }) => {
    console.log("Test 1 Started")


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



});


test('test 2', async ({ page }) => {
    console.log("Test 2 Started")

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



});