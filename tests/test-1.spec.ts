import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Djquery%252Fdroppable%26oq%3Djquery%252Fdroppable%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEINjU0OWowajKoAgCwAgE%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DIpcQav6YHd_k1e8Pnebp8AE&q=EgRnoZAqGKKuwtAGIjAkRgvUaE-wUAlZPDzld2u3UsYe4iGiOhQxgwNgliD5HV5VzsVE6FW6kcxpW6tDcmMyAVJaAUM');
  await page.locator('iframe[name="a-el3326ias1xb"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
});