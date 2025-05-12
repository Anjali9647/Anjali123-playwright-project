import { Locator, Page } from "@playwright/test";

export class baseClass{
    public page:Page
    constructor(page:Page)
    {
        this.page = page;
    }

    async getLocator(locator:string):Promise<Locator>
    {
        return await this.page.locator(locator);
    }
    async fillValue(locator:string,text:string)
    {
        await this.page.locator(locator).fill(text);
    }
    async clickOnLoginButton(locator:string){
        await this.page.locator(locator).click();
    }

    
}