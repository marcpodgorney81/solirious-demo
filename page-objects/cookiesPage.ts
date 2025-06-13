import { expect, type Page } from '@playwright/test';
import { cookiesPageURL } from '../consts';

export class CookiesPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async pageLoaded() {
    // Expect we are on cookies page 
    expect(this.page.url()).toBe(cookiesPageURL);

    // Expect a title 
    await expect(this.page).toHaveTitle(/Cookies on GOV.UK/);
  }
}