import { test } from '@playwright/test';
import { HomePage } from '../page-objects/homepage';
import { CalculatorPage } from '../page-objects/calculatorPage';

test('e2e - (normal hours, hours per week, entire year) - should result in leave calculation displayed', async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.goto();
  await homepage.start();

  const calculatorPage = new CalculatorPage(page);

  await calculatorPage.navigateE2ENormalHoursPerWeekJourney();
  await calculatorPage.checkForInformationSummary();
});