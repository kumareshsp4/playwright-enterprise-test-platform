import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataGenerator } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

/* Steps
1. Navigate to Application URL
2. Go to Registration page
3. Enter all the details
4. Click on Continue
5. Verify the success message
*/

let homePage: HomePage;
let registrationPage: RegistrationPage;
let config: TestConfig;

test.beforeEach(async ({ page }) => {
  // Load the Test config file
  config = new TestConfig();

  //Naviagte to application URL
  await page.goto(config.appUrl);

  //Initialize Page Objects
  homePage = new HomePage(page);
  registrationPage = new RegistrationPage(page);
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(3000);
  await page.close();
});

test('User Registration Test @master @sanity @regresssion', async () => {
  //Navigate to My Account and Click the Register
  await homePage.clickMyAccount();
  await homePage.clickRegister();

  //Enter the user details
  await registrationPage.enterFirstName(RandomDataGenerator.getFirstName());
  await registrationPage.enterLastName(RandomDataGenerator.getLastname());
  await registrationPage.enterEmail(RandomDataGenerator.getEmail());
  await registrationPage.enterTelephone(RandomDataGenerator.getEmail());
  const password = RandomDataGenerator.getRandomPassword();
  await registrationPage.enterPassword(password);
  await registrationPage.enterConfPassword(password);
  await registrationPage.checkPolicy();
  await registrationPage.clickButton();

  const confirmMsg = await registrationPage.getConfirmationMsg();
  expect(confirmMsg).toContain('Your Account Has Been Created!');
});
