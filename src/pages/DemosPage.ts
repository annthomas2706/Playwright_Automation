import { test, expect, Page, Locator } from '@playwright/test';


export class DemoPage {
    readonly page: Page;
    readonly droppableLink: Locator;



    constructor(page: Page) {
        this.page = page;
        this.droppableLink = page.locator('#content').getByRole('link', { name: 'Droppable' })
    }

    async clickDroppable() {

        await this.droppableLink.click();
    }

}