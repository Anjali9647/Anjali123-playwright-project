import {test,expect} from '@playwright/test'

test.use({trace:'on'});
test("hover mouse test",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/");
await page.locator('[href="/hovers"]').click();
const loctor=await page.hover('//a[@href="/users/1"]/parent::div[@class="figcaption"]/parent::div/img[@src="/img/avatar-blank.jpg"]');
await expect(page.locator('//a[@href="/users/1"]/parent::div[@class="figcaption"]/parent::div/img[@src="/img/avatar-blank.j"]')).toBeVisible();
})