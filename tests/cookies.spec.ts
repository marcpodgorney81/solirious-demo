import { test } from '@playwright/test';
import { HomePage } from '../page-objects/homepage';
import { CookiesPage } from '../page-objects/cookiesPage';
import { policyCookie, preferencesCookie } from '../consts'; 

test('accepting cookies should show confirmation message', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.acceptCookies();
});

test('rejecting cookies should show confirmation message', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.rejectCookies();
});

test('accepting cookies should set expected cookies in browser', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.acceptCookies();
  await homepage.checkForAcceptCookies();
});

test('clicking hide message should hide cookie banner', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.acceptCookies();
  await homepage.hideCookies();
});

test('rejecting cookies should set expected cookies in browser', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.rejectCookies();
  await homepage.checkForRejectCookies();
});

test('cookie banner should not be displayed if cookies are set', async ({ page }) => {
  // set cookies in context 
  page.context().addCookies([policyCookie, preferencesCookie]);

  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.doesNotHaveCookieBanner();
});

test('clicking view cookies should direct to cookies page', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.viewCookies();

  const cookiesPage = new CookiesPage(page);
  await cookiesPage.pageLoaded();
});