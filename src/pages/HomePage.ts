import { test, expect, Page, Locator } from '@playwright/test';


export class HomePage {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly jqueryUILink: Locator;



    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.getByRole('searchbox', { name: 'Search jQuery UI' });
        this.jqueryUILink = page.getByRole('link', { name: 'jQuery UI Demos › Interactions' });
    }



    async goToURL() {
        await this.page.goto(`${process.env.JQUERY_HOME_URL}`);
    }

    async searchDemo(keyWord: string) {

        await this.searchBox.click();
        await this.searchBox.press('CapsLock');
        await this.searchBox.fill('D');
        await this.searchBox.press('CapsLock');
        await this.searchBox.fill(keyWord);
        await this.jqueryUILink.click();

    }
}



