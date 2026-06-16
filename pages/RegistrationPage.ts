import { Page, Locator, expect } from '@playwright/test';

export class RegistrationPage {
  //Locators
  private readonly page: Page;
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly email: Locator;
  private readonly telephone: Locator;
  private readonly password: Locator;
  private readonly confPassword: Locator;
  private readonly subscribe: Locator;
  private readonly privatePolicy: Locator;
  private readonly btnContinue: Locator;
  private readonly messageConfirmation: Locator;

  //Constructors
  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.email = page.getByPlaceholder('E-Mail');
    this.telephone = page.getByPlaceholder('Telephone');
    this.password = page.getByPlaceholder('Password', { exact: true });
    this.confPassword = page.getByPlaceholder('Password Confirm', { exact: true });
    this.subscribe = page.getByLabel('No', { exact: true });
    this.privatePolicy = page.getByRole('checkbox');
    this.btnContinue = page.locator('input.btn.btn-primary');
    this.messageConfirmation = page.getByRole('heading', {
      name: 'Your Account Has Been Created!',
    });
  }

  //Action methods

  async enterFirstName(fname: string): Promise<void> {
    await this.firstName.fill(fname);
  }

  async enterLastName(lname: string): Promise<void> {
    await this.lastName.fill(lname);
  }

  async enterEmail(email: string): Promise<void> {
    await this.email.fill(email);
  }

  async enterTelephone(telephone: string): Promise<void> {
    await this.telephone.fill(telephone);
  }

  async enterPassword(password: string): Promise<void> {
    await this.password.fill(password);
  }

  async enterConfPassword(password: string): Promise<void> {
    await this.confPassword.fill(password);
  }

  async clickSubscribe(): Promise<void> {
    await this.subscribe.click();
  }

  async checkPolicy(): Promise<void> {
    await this.privatePolicy.check();
  }

  async clickButton(): Promise<void> {
    await this.btnContinue.click();
  }

  async getConfirmationMsg(): Promise<string> {
    return (await this.messageConfirmation.textContent()) ?? '';
  }

  //Complete registration account
  async completeRegistration(userData: {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    passsword: string;
  }): Promise<void> {
    await this.enterFirstName(userData.firstName);
    await this.enterLastName(userData.lastName);
    await this.enterEmail(userData.email);
    await this.enterTelephone(userData.telephone);
    await this.enterPassword(userData.passsword);
    await this.enterConfPassword(userData.passsword);
    await this.privatePolicy.check();
    await this.btnContinue.click();
    await expect(this.messageConfirmation).toBeVisible();
  }
}
