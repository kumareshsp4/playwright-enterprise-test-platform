import { Locator, Page } from '@playwright/test';
import { LogoutPage } from './LogoutPage';

export class MyAccountPage {
  //locators
  private readonly page: Page;
  private readonly myaccount: Locator;
  private readonly lnkLogout: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.myaccount = page.locator('h2:has-text("My Account")');
    this.lnkLogout = page.locator("text='Logout'").nth(1);
  }
  //action methods
  async isMyAccountPageExist() {
    let title: string = await this.page.title();
    if (title) {
      return true;
    }
    return false;
  }

  async isMyAccountPageVisible(): Promise<string> {
    return (await this.myaccount.textContent()) ?? '';
  }

  async clickLogout(): Promise<LogoutPage> {
    try {
      await this.lnkLogout.click();
      return new LogoutPage(this.page);
    } catch (error) {
      console.log(`Unable to click Logout link: ${error}`);
      throw error; // Re-throw the error to fail the test
    }
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }
}
