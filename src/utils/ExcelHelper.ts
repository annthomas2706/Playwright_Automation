// Import xlsx
import * as EXCEL from 'xlsx';
import fs from 'fs';

// Define test data structure
interface TestRecord {
    Section: string,
    Title: string
}

// Create method to read excel file
export function readExcelFile(filePath: string) {

    // Read the excel file as binary string
    const file = fs.readFileSync(filePath);

    // parse into workbook object
    const workbook = EXCEL.read(file);

    // Get first sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    // convert sheet into json
    //Don't treat the first row as column names. Give me everything as arrays."
    const rawData: any[] = EXCEL.utils.sheet_to_json(sheet, { header: 1 })

    // convert raw data into TestRecord obj since in above we got array of arrays 
    //But in aboev if we dont use header:1 we can drctry use it as objects
    const records: TestRecord[] = rawData.slice(1).map((column: any) => ({
        Section: column[0],
        Title: column[1]
    }))
    return records;
}