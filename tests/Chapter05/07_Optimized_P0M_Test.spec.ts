// Import playwright module
import { test, expect } from '../../src/fixture/TestFixture'

test('Optimized Page Object Model Test in Playwright', async ({ homePage, demoPage, demoDropPage }) => {

    await homePage.goToURL();
    await homePage.searchDemo(`${process.env.SEARCH_KEYWORD_DEMO}`);
    await demoPage.clickDroppable();
    await demoDropPage.validateDroppableText(`${process.env.DROPPABLE_TEXT}`);
});