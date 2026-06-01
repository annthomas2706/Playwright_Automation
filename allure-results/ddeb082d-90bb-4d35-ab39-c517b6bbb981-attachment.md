# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06\POST_API_Dynamic_Requests.spec.ts >> Create POST API Request using dynamic api request body in playwright & typescript
- Location: tests\Chapter06\POST_API_Dynamic_Requests.spec.ts:16:5

# Error details

```
Error: ENOENT: no such file or directory, open 'C:\Users\marya\OneDrive\Desktop\PlayWright_Automation\test-data\api_requests\POST_API_Dynamic_Request.json'
```

# Test source

```ts
  1  | // Import playwright module
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | import { formatAPIRequest } from '../../src/utils/APIHelper'
  5  | import path from 'path';
  6  | import fs from 'fs';
  7  | import { utils } from 'xlsx';
  8  | 
  9  | //import { faker } from '@faker-js/faker';
  10 | 
  11 | test.use({
  12 |     baseURL: process.env.BASE_API_URL,
  13 | })
  14 | 
  15 | 
  16 | test('Create POST API Request using dynamic api request body in playwright & typescript', async ({ request }) => {
  17 | 
  18 |     // Reading json file
  19 |     const filePath = path.join(__dirname, '../../test-data/api_requests/POST_API_Dynamic_Request.json');
> 20 |     const jsonTemplate = fs.readFileSync(filePath, 'utf-8');
     |                             ^ Error: ENOENT: no such file or directory, open 'C:\Users\marya\OneDrive\Desktop\PlayWright_Automation\test-data\api_requests\POST_API_Dynamic_Request.json'
  21 | 
  22 |     const values = ['cypress by testers talk', 'javascript by testers talk', 1000];
  23 | 
  24 |     // Updating POST API request body
  25 |     const postAPIRequest = await formatAPIRequest(jsonTemplate, values);
  26 | 
  27 |     // Create POST API Request
  28 |     const postAPIResponse = await request.post(`/booking`, { data: JSON.parse(postAPIRequest) });
  29 | 
  30 |     // Print JSON API response
  31 |     const jsonPOSTAPIResponse = await postAPIResponse.json();
  32 |     console.log('POST API Response : ' + JSON.stringify(jsonPOSTAPIResponse, null, 2));
  33 | 
  34 |     // Validating api response
  35 |     expect(postAPIResponse.status()).toBe(200);
  36 |     expect(postAPIResponse.statusText()).toBe('OK');
  37 |     expect(postAPIResponse.headers()['content-type']).toContain('application/json');
  38 | 
  39 |     // Validate propert/key names
  40 |     expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
  41 |     expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');
  42 | 
  43 |     expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
  44 |     expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');
  45 | 
  46 |     // Validate API response body
  47 |     expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
  48 |     expect(jsonPOSTAPIResponse.booking.firstname).toBe('Ann');
  49 |     expect(jsonPOSTAPIResponse.booking.lastname).toBe('Thomas');
  50 | 
  51 |     expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15');
  52 |     expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17');
  53 | });
  54 | 
  55 | 
  56 | // test('Create POST API Request using dynamic api request body in playwright & typescript 2', async ({ request }) => {
  57 | 
  58 | //     // Reading json file
  59 | //     const filePath = path.join(__dirname, '../../test-data/api_requests/Dynamic_POST_API_Request.json');
  60 | //     const jsonTemplate = fs.readFileSync(filePath, 'utf-8');
  61 | 
  62 | //     const firstName = faker.person.firstName();
  63 | //     const lastName = faker.person.lastName();
  64 | //     const totalPrice = faker.number.int({ min: 1000, max: 10000 });
  65 | 
  66 | //     const values = [firstName, lastName, totalPrice];
  67 | 
  68 | //     // Updating POST API request body
  69 | //     const postAPIRequest = await formatAPIRequest(jsonTemplate, values);
  70 | 
  71 | //     // Create POST API Request
  72 | //     const postAPIResponse = await request.post(`/booking`, { data: JSON.parse(postAPIRequest) });
  73 | 
  74 | //     // Print JSON API response
  75 | //     const jsonPOSTAPIResponse = await postAPIResponse.json();
  76 | //     console.log('POST API Response : ' + JSON.stringify(jsonPOSTAPIResponse, null, 2));
  77 | 
  78 | //     // Validating api response
  79 | //     expect(postAPIResponse.status()).toBe(200);
  80 | //     expect(postAPIResponse.statusText()).toBe('OK');
  81 | //     expect(postAPIResponse.headers()['content-type']).toContain('application/json');
  82 | 
  83 | //     // Validate propert/key names
  84 | //     expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
  85 | //     expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');
  86 | 
  87 | //     expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
  88 | //     expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');
  89 | 
  90 | //     // Validate API response body
  91 | //     expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
  92 | //     expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName);
  93 | //     expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastName);
  94 | 
  95 | //     expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15');
  96 | //     expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17');
  97 | // });
```