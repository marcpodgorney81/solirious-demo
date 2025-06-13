import { expect, Locator, type Page } from '@playwright/test';
import { calculatorStartURL } from '../consts';

export class CalculatorPage {
  readonly page: Page;
  readonly questionHeader: Locator;
  readonly questionText: Locator;
  readonly changeAnswerLink: Locator;
  readonly errorSummaryHeader: Locator;
  readonly answersHeader: Locator;
  readonly continueButton: Locator;
  readonly errorSummary: Locator;
  readonly errorLink: Locator;
  readonly startAgainLink: Locator;
  readonly response: Locator;

  constructor(page: Page) {
    this.page = page;
    this.questionHeader = page.getByRole('heading', { name: /\w/, level: 1 }); 
    this.questionText = page.getByRole('term'); 
    this.changeAnswerLink = page.getByRole('link', { name: /Change/ });
    this.errorSummaryHeader = page.getByRole('heading', { name: /problem/, level: 2 }); 
    this.answersHeader = page.getByRole('heading', { name: 'Your answers' });
    this.errorSummary = page.getByTestId('error-summary');
    this.errorLink = page.getByRole('link', { name: /Please answer/ });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.startAgainLink = page.getByRole('link', { name: /Start again/ });
    this.response = page.getByTestId('response');
  }

  async pageLoaded() {
    // Expect we are on cookies page 
    expect(this.page.url()).toBe(calculatorStartURL);

    // Expect a question header  
    await expect(this.questionHeader).toBeVisible();
  }

  async selectResponse(responseIndex: number) {
    const responseLocator = this.page.getByTestId(`response-${responseIndex}`);

    await responseLocator.check();
  }

  async enterResponse(value: string) {
    await this.response.click();
    await this.response.fill(value);
  }

  async continue() {
    await this.continueButton.click();
  }

  async startAgain() {
    await this.startAgainLink.click();
  }

  async checkForAnswers() {
    // Expect an answer to previous question 
    await expect(this.questionHeader).toBeVisible();
    await expect(this.questionText).toBeVisible();
    await expect(this.changeAnswerLink).toBeVisible();
  }

  async checkForErrorSummary() {
    // Expect the error summary to be visible  
    await expect(this.errorSummary).toBeVisible();
    await expect(this.errorSummaryHeader).toBeVisible();
    await expect(this.errorLink).toBeVisible();
  }
}