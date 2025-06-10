import { test, expect } from '@playwright/test';
import { testURL } from '../consts';

test('page should have title - html loaded', async ({ page }) => {
  await page.goto(testURL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Calculate holiday entitlement/);
});

test('key components should be visible', async ({ page }) => {
  await page.goto(testURL);

  // heading should be displayed 
  await expect(page.getByRole('heading', { name: 'Calculate holiday entitlement' })).toBeVisible();

  // start now button should be displayed 
  await expect(page.getByRole('button', { name: 'Start now' })).toBeVisible();
});
