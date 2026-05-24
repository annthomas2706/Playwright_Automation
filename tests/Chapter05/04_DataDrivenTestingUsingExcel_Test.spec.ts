import { test, expect } from '@playwright/test';

import path from 'path';
import {readExcelFile} from '../../src/utils/ExcelHelper';

const filePath = path.join(__dirname, '../../test-data/qa/testdata.xlsx');
const records = readExcelFile(filePath);


for (const record of records) {//records will contain all rows and on each iter each row will be taken


   test(`Data Driven Testing Using CSV file in playwright  :${record.Section}`, async ({ page }) => {
   
           console.log(`Section : ${record.Section}`);
           await page.goto('https://jqueryui.com/droppable/');
           await page.getByRole('link', { name: record.Section }).click();
           await expect(page.locator('h1')).toContainText(record.Title);
       });
}