import { test } from '@playwright/test';
import { HomePage } from '../page-objects/homepage';
import { CalculatorPage } from '../page-objects/calculatorPage';

test('entering invalid value for hours per week should display error summary', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.start();

  const calculatorPage = new CalculatorPage(page);

  await calculatorPage.navigateToHoursPerWeek();

  await calculatorPage.enterResponse('abc');
  await calculatorPage.continue();
  await calculatorPage.checkForErrorSummary();
});

test('entering blank value for hours per week should display error summary', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.start();

  const calculatorPage = new CalculatorPage(page);

  await calculatorPage.navigateToHoursPerWeek();

  await calculatorPage.enterResponse('');
  await calculatorPage.continue();
  await calculatorPage.checkForErrorSummary();
});

test('entering value greater than maximum for hours per week should display error summary', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.start();

  const calculatorPage = new CalculatorPage(page);

  await calculatorPage.navigateToHoursPerWeek();

  await calculatorPage.enterResponse('169');
  await calculatorPage.continue();
  await calculatorPage.checkForMaximumRangeErrorSummary();
});

test('entering value greater less than minimum for hours per week should display error summary', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.start();

  const calculatorPage = new CalculatorPage(page);

  await calculatorPage.navigateToHoursPerWeek();

  await calculatorPage.enterResponse('0');
  await calculatorPage.continue();
  await calculatorPage.checkForMinimumRangeErrorSummary();
});