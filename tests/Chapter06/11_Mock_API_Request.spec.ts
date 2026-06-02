
// Import playwright module
import { test, expect } from '@playwright/test';


test('Mock API request in playwright', async ({ page }) => {

    // Mock API request
    await page.route('*/**/api/v1/fruits', async (route) => {//request is send and intercepted by PW
        const request = route.request(); //Gets the intercepted request details (URL, method, headers, body).

        const json = {
            name: 'Mock Fruit'
        };

        await route.continue({
            postData: json
        })
    });
    //// Modifies the intercepted request and forwards it to the real server;
    // the server response goes directly to the browser 

    // Wait for the API response that matches the specified endpoint--to fetch response from brwsr
    const responsePromise = page.waitForResponse('**/api/v1/fruits');

    // Navigate to the application, which triggers the API request
    await page.goto('https://demo.playwright.dev/api-mocking/');

    // Capture the API response once it is received from Server
    const response = await responsePromise;

    // Validate that the API returned a successful status code
    expect(response.status()).toBe(200);

    // Parse the response body into JSON format
    const responseBody = await response.json();

    // Print the response body for verification/debugging
    console.log(responseBody);
});
