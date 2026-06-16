import { Page, Locator } from '@playwright/test';

export class HomePage {
  //Locators
  private readonly page: Page;
  private readonly lnkMyAccount: Locator;
  private readonly lnkRegister: Locator;
  private readonly lnkLogin: Locator;
  private readonly txtSearchBox: Locator;
  private readonly btnSearch: Locator;

  //Constructors

  constructor(page: Page) {
    this.page = page;
    this.lnkMyAccount = page.locator('a[title="My Account"]');
    this.lnkRegister = page.locator('a').filter({ hasText: 'Register' }).first();
    this.lnkLogin = page.locator('a').filter({ hasText: 'Login' }).first();
    this.txtSearchBox = page.getByRole('textbox', { name: 'Search' });
    this.btnSearch = page.locator('button[class="btn btn-default btn-lg"]');
  }

  //Action methods
  async isHomePageExist() {
    let title: string = await this.page.title();
    if (title) {
      return true;
    }
    return false;
  }

  async clickMyAccount() {
    try {
      await this.lnkMyAccount.click();
    } catch (error) {
      console.log(`Expection occured on click of my account link ${error}`);
      throw error;
    }
  }

  async clickRegister() {
    try {
      await this.lnkRegister.click();
    } catch (error) {
      console.log(`Exception occured on click of Register link ${error}`);
      throw error;
    }
  }

  async clickLogin() {
    try {
      await this.lnkLogin.click();
    } catch (error) {
      console.log(`Exception occured on click of Login link ${error}`);
      throw error;
    }
  }

  async enterProductName(product: string) {
    try {
      await this.txtSearchBox.fill(product);
    } catch (error) {
      console.log(`Exception occured on entering the product ${error}`);
      throw error;
    }
  }

  async clickSearch() {
    try {
      await this.btnSearch.click();
    } catch (error) {
      console.log(`Exception occuured on search ${error}`);
      throw error;
    }
  }
}
