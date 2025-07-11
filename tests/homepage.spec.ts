import { test } from '@playwright/test';
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
