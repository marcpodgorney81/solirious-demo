import { expect, type Locator, type Page } from '@playwright/test';
import { testURL } from '../consts'; 

export class HomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('button', { name: 'Start now' });
    this.gettingStartedHeader = page.getByRole('heading', { name: 'Calculate holiday entitlement' });
  }

  async goto() {
    await this.page.goto(testURL);
  }

  async pageLoaded() {
    // Expect a title, header and get started button 
    await expect(this.page).toHaveTitle(/Calculate holiday entitlement/);
    await expect(this.getStartedLink).toBeVisible();
    await expect(this.gettingStartedHeader).toBeVisible();
  }
}