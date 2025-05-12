import { Locator, Page } from "@playwright/test";
import { baseClass } from "./baseClass";


export class loginPageForShopping extends baseClass{
   
    userName:string;
    password:string;
    loginbutton:string;
    loginLink:string;
    constructor(page:Page){
        super(page);
        this.userName='//form[@action="/login"]/input[@name="email"]';
        this.password='//form[@action="/login"]/input[@name="password"]';
        this.loginbutton="//button[text()='Login']";
         this.loginLink ="[href='/login']";
    }
        
    async getUrl()
    {
        await this.page.goto('https://automationexercise.com/');
    }
    async gotoLoginButton()
    {
       const loctor= await this.getLocator(this.loginLink);
        loctor.click();
    }

    async loginDetail(username:string,PassWord:string)
    {
        await this.fillValue(this.userName,username)
        await this.fillValue(this.password,PassWord);
        await this.clickOnLoginButton(this.loginbutton);
    }

    async clickOnSpecificProduct(productName:string)
    {
        this.page.setDefaultTimeout(18000);
        const product = await this.getLocator(
            `//div[@class='col-sm-4']/div/div/div/p[text()='${productName}']/parent::div[@class='productinfo text-center']/parent::div[@class='single-products']/following-sibling::div[@class='choose']/ul/li/a/i[@class='fa fa-plus-square']`
        );
        await  product.waitFor({ state: 'visible' });  
        await  product.click();
    }

}