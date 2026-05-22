import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testdata.json';

//define structure of json for typesafety means what each key will accept on testData object
//it explains what type of json obj it conatins
type TestData =
    {
        TestDataSet1: {
            section: string,
            title: string
        },
        TestDataSet2: {
            section: string,
            title: string
        }
    }

//Convert imported JSON into typed object
//now typedTestData contains list of json objects
const typedTestData = testData as TestData;

//for...in is used to iterate over keys/indexes,(Here to iterate over keys of TestData obj)
for (const dataSetName in typedTestData) {//on each iteration it gets each keys ie TestData and TestData2

    //to get values of object using keys,we use obj[keys] return its value
    // Here  on 1st iter: TestData[TestDataSet1] is assigned to skill 
    // ie value of TestDataSet1 is assigned to skill
    const tabs = typedTestData[dataSetName as keyof TestData];



    test(`Data Driven Testing Using JSON file in playwright  :${tabs.section}`, async ({ page }) => {
        console.log(`Data set name : ${dataSetName}`);
        console.log(`Section : ${tabs.section}`);
        await page.goto('https://jqueryui.com/droppable/');
        await page.getByRole('link', { name: tabs.section }).click();
        await expect(page.locator('h1')).toContainText(tabs.title);
    });
}