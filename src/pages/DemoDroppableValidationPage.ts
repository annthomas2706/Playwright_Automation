
import { expect, Page, Locator } from '@playwright/test';


export class DemoDroppableValidationPage {
  readonly page: Page;
  readonly dropValidationText: Locator;



  constructor(page: Page) {
    this.page = page;
    this.dropValidationText = page.locator('h1');
  }

  async validateDroppableText(validateText: string) {

    await expect(this.dropValidationText).toContainText(validateText);

  }
}