import { test, expect } from '@playwright/test';
import { testURL } from '../consts';
import { HomePage } from '../page-objects/homepage';

test('page should be loaded with key components', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.pageLoaded();
});

test('cookie banner should be displayed', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.hasCookieBanner();
});

test('accpeting cookies should show confirmation message', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.acceptCookies();
});

test('rejecting cookies should show confirmation message', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.rejectCookies();
});