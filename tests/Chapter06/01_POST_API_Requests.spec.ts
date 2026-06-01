// Import playwright module
import { test, expect } from '@playwright/test';

import postRequest from '../../test-data/api_requests/POST_API_Requests.json';
test.use({
    baseURL: process.env.BASE_API_URL,
})


test('Create POST API Request using static file in playwright & typescript', async ({ request }) => {

    // Create POST API Request
    const postAPIResponse = await request.post(`/booking`,{data: postRequest});

    // convert APIResponse obj to json obj t get clear output 
    const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('POST API Response : ' + JSON.stringify(jsonPOSTAPIResponse, null, 2));
    //JSON.stringify() converts the JavaScript object into a printable JSON string, and 2 adds proper indendation

    // Validating api response
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');

    // Validate propert/key names
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');

    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    // Validate API response body
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('Ann Mary');
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('Thomas');

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17');
});