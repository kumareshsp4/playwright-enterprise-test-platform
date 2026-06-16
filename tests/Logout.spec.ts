/**
 * Test Case: User Logout
 *
 * Tags: @master @regression
 *
 * Steps:
 * 1) Navigate to the application URL
 * 2) Go to Login page from Home page
 * 3) Login with valid credentials
 * 4) Verify 'My Account' page
 * 5) Click on Logout link
 * 6) Click on Continue button
 * 7) Verify user is redirected to Home Page
 */

import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { LogoutPage } from '../pages/LogoutPage';

// Declare shared variables
let testConfig: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let logoutPage: LogoutPage;

// Setup before each test
test.beforeEach(async ({ page }) => {
  testConfig = new TestConfig(); // Load test config
  await page.goto(testConfig.appUrl); // Step 1: Navigate to app URL

  // Initialize page objects
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  myAccountPage = new MyAccountPage(page);
  logoutPage = new LogoutPage(page);
});

test('User logout test @master @regression', async () => {
  //Navigate to Login Page
  await homePage.clickMyAccount();
  await homePage.clickLogin();

  //Enter the login details
  await loginPage.login(testConfig.email, testConfig.password);

  const isLoggedIn = await myAccountPage.isMyAccountPageExist();
  expect(isLoggedIn).toBeTruthy();

  // Step 5: Click Logout, which returns LogoutPage instance
  logoutPage = await myAccountPage.clickLogout();

  // Step 6: Verify "Continue" button is visible before clicking
  expect(await logoutPage.isContinueButtonVisible()).toBe(true);

  // Step 7: Click Continue and verify redirection to HomePage
  homePage = await logoutPage.clickContinue();
  expect(await homePage.isHomePageExist()).toBe(true);
});
