# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06\POST_API_Requests.spec.ts >> Create POST API Request using static file in playwright & typescript
- Location: tests\Chapter06\POST_API_Requests.spec.ts:12:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "playwright typescript by testers talk"
Received: "Ann Mary"
```

# Test source

```ts
  1  | // Import playwright module
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | import postRequest from '../../test-data/api_requests/POST_API_Requests.json';
  5  | test.use({
  6  |     baseURL: process.env.BASE_API_URL,
  7  | })
  8  | 
  9  | /**
  10 |  * Author Testers Talk
  11 |  */
  12 | test('Create POST API Request using static file in playwright & typescript', async ({ request }) => {
  13 | 
  14 |     // Create POST API Request
  15 |     const postAPIResponse = await request.post(`/booking`,{data: postRequest});
  16 | 
  17 |     // convert APIResponse obj to json obj t get clear output 
  18 |     const jsonPOSTAPIResponse = await postAPIResponse.json();
  19 |     console.log('POST API Response : ' + JSON.stringify(jsonPOSTAPIResponse, null, 2));
  20 |     //JSON.stringify() converts the JavaScript object into a printable JSON string, and 2 adds proper indendation
  21 | 
  22 |     // Validating api response
  23 |     expect(postAPIResponse.status()).toBe(200);
  24 |     expect(postAPIResponse.statusText()).toBe('OK');
  25 |     expect(postAPIResponse.headers()['content-type']).toContain('application/json');
  26 | 
  27 |     // Validate propert/key names
  28 |     expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
  29 |     expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');
  30 | 
  31 |     expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
  32 |     expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');
  33 | 
  34 |     // Validate API response body
  35 |     expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
> 36 |     expect(jsonPOSTAPIResponse.booking.firstname).toBe('playwright typescript by testers talk');
     |                                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  37 |     expect(jsonPOSTAPIResponse.booking.lastname).toBe('playwright javascript by testers talk');
  38 | 
  39 |     expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15');
  40 |     expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17');
  41 | });
```