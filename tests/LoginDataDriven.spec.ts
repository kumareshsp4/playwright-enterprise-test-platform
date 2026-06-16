import { test, Page, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';
import { MyAccountPage } from '../pages/MyAccountPage';
import { DataProvider } from '../utils/dataProvider';

let testConfig: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;

const jsonPath = 'testdata/logindata.json';
const loginData = DataProvider.getTestDataFromJson(jsonPath);

test.beforeEach(async ({ page }) => {
  testConfig = new TestConfig(); //Loading the test config
  await page.goto(testConfig.appUrl); //Naviagate to application url

  //Initialting the page objects
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  myAccountPage = new MyAccountPage(page);
});

for (const data of loginData) {
  test(`Login test from JSON: ${data.testName} @datadriven`, async () => {
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //Enter the login details
    await loginPage.login(data.email, data.password);

    if (data.expected === 'success') {
      const isLoggedIn = await myAccountPage.isMyAccountPageExist();
      expect(isLoggedIn).toBeTruthy();
    } else {
      const message = await loginPage.inValidLogin();
      expect(message).toBe('Warning: No match for E-Mail Address and/or Password.');
    }
  });
}

const csvPath = 'testdata/logindata.csv';
const loginCSVData = DataProvider.getTestDataFromCSV(csvPath);

for (const data of loginCSVData) {
  test(`Login test from CSV: ${data.testName} @datadriven`, async () => {
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //Enter the login details
    await loginPage.login(data.email, data.password);

    if (data.expected === 'success') {
      const isLoggedIn = await myAccountPage.isMyAccountPageExist();
      expect(isLoggedIn).toBeTruthy();
    } else {
      const message = await loginPage.inValidLogin();
      expect(message).toBe('Warning: No match for E-Mail Address and/or Password.');
    }
  });
}
