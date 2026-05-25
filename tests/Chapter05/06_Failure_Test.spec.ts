// Import playwright module
import { test, expect } from '../../src/fixture/TestFixture'
import { HomePage } from '../../src/pages/HomePage';
import { DemoPage } from '../../src/pages/DemosPage';
import { DemoDroppableValidationPage } from '../../src/pages/DemoDroppableValidationPage';


test('Implementing Fixture in Playwright', async ({ page }) => {
   console.log("Test Execution Started...")
    // Create object of homepage
    const homePage = new HomePage(page);
    await homePage.goToURL();
    await homePage.searchDemo(`${process.env.SEARCH_KEYWORD_DEMO}`);

    // Create object of DemoPage
    const demoPage = new DemoPage(page);
    await demoPage.clickDroppable();

    // Create object of ValidationPage
    const demodropPage = new DemoDroppableValidationPage(page);
    await demodropPage.validateDroppableText(`${process.env.DROPPABLE_TEXT}`);

    console.log("Test Execution Ended...")
});