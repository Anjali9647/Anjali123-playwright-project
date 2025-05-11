import{test,expect} from '@playwright/test'
import{loginPageForShopping} from './../../pages/loginPageAutomation'
import { productDetailPage } from '../../pages/productDetailPage';
test.use({trace:'on'},{ viewport: { width: 1280, height: 500 }})
test("shopping",async({page})=>{
const login=new loginPageForShopping(page);
const productPage=new productDetailPage(page);
await login.getUrl();
await login.gotoLoginButton();
await login.loginDetail('anjalimasal@ggg','1234');
await login.clickOnSpecificProduct('Blue Top');
await productPage.enternameTextFieldInProductPage('Anjali');
await productPage.enterEmailAdress('anjalimaaaa@');
await productPage.enterReview('best product');


})