import { test, expect } from '@playwright/test';

test('Page Visual Comparison In Playwright', async ({ page }) => {
  // Recording...
  await page.goto('https://github.com/login');
  await expect(page).toHaveScreenshot('GithubLoginPage.png');

  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('abc');

  await expect(page).toHaveScreenshot('GithubLoginFill.png');

});

test('Element Visual Comparison In Playwright', async ({ page }) => {
  await page.goto('https://github.com/login');

  const element=page.getByText('Username or email address Password Forgot password? Sign in or This browser or');
  await expect(element).toHaveScreenshot('GithubLoginElement.png');

  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('abc');

  await expect(element).toHaveScreenshot('GithubLoginElementFill.png');

});