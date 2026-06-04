import { Page,Locator } from "@playwright/test";


export class LoginPage{

//Locators
private readonly page: Page;
private readonly email: Locator;
private readonly password: Locator;
private readonly btnLogin: Locator;
private readonly errorMsg: Locator;

//Constructors
constructor (page: Page){
    this.page = page;
    this.email = page.getByRole('textbox', { name: 'E-Mail Address' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.btnLogin = page.locator('input[type="submit"]');
    this.errorMsg = page.getByText('Warning: No match for E-Mail Address and/or Password.', { exact: true });
}

//Action Methods
async login(email: string, passsword: string){
    try{
        this.email.fill(email);
        this.password.fill(passsword);
        this.btnLogin.click();
    }catch(error){
        console.log(`Error occured during login ${error}`);
    }

}

async inValidLogin():Promise<null | string>{
    return await this.errorMsg.textContent();
}

}
