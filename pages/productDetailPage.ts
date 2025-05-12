import { expect, Page} from '@playwright/test'
import { baseClass } from './baseClass'
export class productDetailPage extends baseClass
{
    textFiled:string;
    email:string;
    reviewLoctor:string;
    constructor(page:Page)
    {
        super(page);
        this.textFiled='#name';
        this.email='#email'
        this.reviewLoctor='//textarea[@id="review"]'
    }

    async enternameTextFieldInProductPage(name:string)
    {
        await this.fillValue(this.textFiled,name);

    }

    async enterEmailAdress(Email:string)
    {
        await this.fillValue(this.email,Email);
    }

    async enterReview(review:string)
    {
        await this.fillValue(this.reviewLoctor,review);
    }

    // async clickOnSubmitButton()
    // {
    //     await this.
    // }
}