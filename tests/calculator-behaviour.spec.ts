import { test } from '@playwright/test';
import { HomePage } from '../page-objects/homepage';
import { CalculatorPage } from '../page-objects/calculatorPage';

test('clicking start should load calculator start screen', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.start();

  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.pageLoaded();
});

test('clicking continue without selecting option should show error message', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.start();

  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.pageLoaded();
  await calculatorPage.continue();

  await calculatorPage.checkForErrorSummary();
});

test('clicking start again should direct to home page', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.start();

  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.selectResponse(1);
  await calculatorPage.continue();

  await calculatorPage.startAgain();
  await homepage.pageLoaded();
});

test('moving to next question should show previous answer', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.start();

  const calculatorPage = new CalculatorPage(page);
  await calculatorPage.selectResponse(1);
  await calculatorPage.continue();

  await calculatorPage.checkForAnswers();
});