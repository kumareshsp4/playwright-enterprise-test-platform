import { test,Page, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../test.config";
import { MyAccountPage } from "../pages/MyAccountPage";

let testConfig: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;

test.beforeEach(async({page}) => {
    testConfig = new TestConfig(); //Loading the test config
    page.goto(testConfig.appUrl); //Naviagate to application url

    //Initialting the page objects
    homePage =  new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
});

test.afterEach(async({page}) => {
    await page.close();
});


test('User Login Test @master @sanity @regresssion', async() => {
    //Navigate to Login Page
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //Enter the login details
    await loginPage.login(testConfig.email, testConfig.password);

    const isLoggedIn = await myAccountPage.isMyAccountPageExist();
    expect(isLoggedIn).toBeTruthy();

});
