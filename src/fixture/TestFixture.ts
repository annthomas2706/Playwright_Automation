import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { DemoPage } from '../pages/DemosPage';
import { DemoDroppableValidationPage } from '../pages/DemoDroppableValidationPage';
import { loadTestData } from '../utils/JsonHelper';
import { TestData } from '../interface/Module1TestData.interface';

/**
 * author Testers Talk
 */
export const test = base.extend<{
    saveLogs: void;
    homePage:HomePage;
    demoPage:DemoPage;
    demoDropPage:DemoDroppableValidationPage;
    testData: TestData;
}>({
    saveLogs: [async ({ }, use) => {//use to pass obj to test
        console.log('Global before is running...');

        await use();//make use available isnide test

        console.log('Global afterEach is running...');
    },
    { auto: true }],
    homePage:async({page},use)=>{
        const homePage=new HomePage(page);
        await use(homePage);

    },
    demoPage:async({page},use)=>{
        const demoPage=new DemoPage(page);
        await use(demoPage);

    },
    
    demoDropPage:async({page},use)=>{   
        const demoDropPage=new DemoDroppableValidationPage(page);
        await use(demoDropPage);

    },

      testData: async ({ }, use) => {
        const data = await loadTestData();
        await use(data);
    }
    
   
});

export { expect } from '@playwright/test';