import { expect, type Locator, type Page } from '@playwright/test';
import { testURL } from '../consts'; 

export class HomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly cookieBanner: Locator;
  readonly acceptCookiesButton: Locator;
  readonly rejectCookiesButton: Locator;
  readonly hideCookiesBannerButton: Locator;
  readonly acceptCookiesMessage: Locator;
  readonly rejectCookiesMessage: Locator;
  readonly viewCookiesLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('button', { name: 'Start now' });
    this.gettingStartedHeader = page.getByRole('heading', { name: 'Calculate holiday entitlement' });
    this.cookieBanner = page.getByTestId('global-cookie-message');
    this.acceptCookiesButton = page.getByRole('button', { name: /Accept/ });
    this.acceptCookiesMessage = page.getByText(/have accepted/);
    this.rejectCookiesButton = page.getByRole('button', { name: /Reject/ });
    this.rejectCookiesMessage = page.getByText(/have rejected/);
    this.hideCookiesBannerButton = page.getByRole('button', { name: /Hide/ });
    this.viewCookiesLink = page.getByRole('link', {name: /View cookies/});
  }

  async goto() {
    await this.page.goto(testURL);
  }

  async hasCookieBanner() {
    // Expect that cookie banner is displayed 
    await expect(this.cookieBanner).toBeVisible();
  }

  async doesNotHaveCookieBanner() {
    // Expect that cookie banner is displayed 
    await expect(this.cookieBanner).not.toBeVisible();
  }

  async acceptCookies() {
    // Expect that when clicking to accept confirmation message is displayed 
    await this.acceptCookiesButton.click();
    await expect(this.acceptCookiesMessage).toBeVisible();
  }

  async viewCookies() {
    await this.viewCookiesLink.click();
  }

  async rejectCookies() {
    // Expect that when clicking to reject confirmation message is displayed 
    await this.rejectCookiesButton.click();
    await expect(this.rejectCookiesMessage).toBeVisible();
  }

  async checkForAcceptCookies() {
    const cookies = await this.page.context().cookies();
    const policyCookie = cookies.find((cookie) => cookie.name === 'cookies_policy');
    expect(policyCookie).toBeDefined();
    expect(policyCookie.value).toEqual("{\"essential\":true,\"settings\":true,\"usage\":true,\"campaigns\":true}");

    const preferencesSetCookie = cookies.find((cookie) => cookie.name === 'cookies_preferences_set');
    expect(preferencesSetCookie).toBeDefined();
    expect(preferencesSetCookie.value).toEqual("true");
  }

  async checkForRejectCookies() {
    const cookies = await this.page.context().cookies();
    const policyCookie = cookies.find((cookie) => cookie.name === 'cookies_policy');
    expect(policyCookie).toBeDefined();
    expect(policyCookie.value).toEqual("{\"essential\":true,\"settings\":false,\"usage\":false,\"campaigns\":false}");

    const preferencesSetCookie = cookies.find((cookie) => cookie.name === 'cookies_preferences_set');
    expect(preferencesSetCookie).toBeDefined();
    expect(preferencesSetCookie.value).toEqual("true");
  }

  async pageLoaded() {
    // Expect a title, header and get started button 
    await expect(this.page).toHaveTitle(/Calculate holiday entitlement/);
    await expect(this.getStartedLink).toBeVisible();
    await expect(this.gettingStartedHeader).toBeVisible();
  }
}