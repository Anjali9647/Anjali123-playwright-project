import { Page,Locator } from "@playwright/test";

export class loginPage {
    readonly page: Page;
    readonly txtUsername: Locator;
    readonly txtPassword: Locator;
    readonly submit: Locator;
    constructor(page: Page) {
        this.page =page;
        this.txtUsername = page.getByRole('textbox', { name: 'Username' });
        this.txtPassword = page.getByRole('textbox', { name: 'Password' });
        this.submit = page.getByRole('button', { name: 'Submit' });
    }

    async urlForLogin()
    {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async loginFunction(username:string,password:string)
    {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        await this.submit.click();
    }
}