// Import playwright module
import { test, expect } from '../../src/fixture/TestFixture'

test('Optimized Page Object Model Test in Playwright', async ({ homePage, demoPage, demoDropPage,testData }) => {

    await homePage.goToURL();
    await homePage.searchDemo(String(testData.Module1TestData?.Demos));
    await demoPage.clickDroppable();
    await demoDropPage.validateDroppableText(String(testData.Module1TestData?.DROPPABLE_TEXT));
});