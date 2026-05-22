import { test, expect } from '@playwright/test';

import { parse } from 'csv-parse/sync';//parse is a function that converts CSV text → JavaScript data
import fs from 'fs';//File System module,Used to read-write files
import path from 'path';//Path module,Used for handling file/folder paths safely


type TestRecords = {
    Section: string,
    Title: string
}

const records = parse(
    fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')),//read file
    {
        columns: true,//read all columns
        skipEmptyLines: true//skip emty rows
    }
) as TestRecords[];//finally assigned then parsed data to TestRecord obj

for (const record of records) {//records will contain all rows and on each iter each row will be taken


    test(`Data Driven Testing Using CSV file in playwright  :${record.Section}`, async ({ page }) => {

        console.log(`Section : ${record.Section}`);
        await page.goto('https://jqueryui.com/droppable/');
        await page.getByRole('link', { name: record.Section }).click();
        await expect(page.locator('h1')).toContainText(record.Title);
    });
}