import { test } from '@playwright/test';
import { HomePage } from '../page-objects/homepage';
import { CalculatorPage } from '../page-objects/calculatorPage';

test('entering invalid value for hours per week should display error summary', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.start();

  const calculatorPage = new CalculatorPage(page);

  await calculatorPage.selectResponse(1);
  await calculatorPage.continue();
  await calculatorPage.selectResponse(1);
  await calculatorPage.continue();
  await calculatorPage.selectResponse(0);
  await calculatorPage.continue();

  await calculatorPage.enterResponse('abc');
  await calculatorPage.continue();
  await calculatorPage.checkForErrorSummary();
});