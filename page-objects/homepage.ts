import { expect, type Locator, type Page } from '@playwright/test';
import { testURL } from '../consts'; 

export class HomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly cookieBanner: Locator;
  readonly acceptCookiesButton: Locator;
  readonly rejectCookiesButton: Locator;
  readonly acceptCookiesMessage: Locator;
  readonly rejectCookiesMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('button', { name: 'Start now' });
    this.gettingStartedHeader = page.getByRole('heading', { name: 'Calculate holiday entitlement' });
    this.cookieBanner = page.getByTestId('global-cookie-message');
    this.acceptCookiesButton = page.getByRole('button', { name: /Accept/ });
    this.acceptCookiesMessage = page.getByText(/have accepted/ );
    this.rejectCookiesButton = page.getByRole('button', { name: /Reject/ });
    this.rejectCookiesMessage = page.getByText(/have rejected/ );
  }

  async goto() {
    await this.page.goto(testURL);
  }

  async hasCookieBanner() {
    // Expect that cookie banner is displayed 
    await expect(this.cookieBanner).toBeVisible();
  }

  async acceptCookies() {
    // Expect that when clicking to accept confirmation message is displayed 
    await this.acceptCookiesButton.click();
    await expect(this.acceptCookiesMessage).toBeVisible();
  }

  async rejectCookies() {
    // Expect that when clicking to reject confirmation message is displayed 
    await this.rejectCookiesButton.click();
    await expect(this.rejectCookiesMessage).toBeVisible();
  }

  async pageLoaded() {
    // Expect a title, header and get started button 
    await expect(this.page).toHaveTitle(/Calculate holiday entitlement/);
    await expect(this.getStartedLink).toBeVisible();
    await expect(this.gettingStartedHeader).toBeVisible();
  }
}