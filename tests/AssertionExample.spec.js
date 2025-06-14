import {test,expect} from '@playwright/test'



test("test for hardAssertion",async ({ page })=>{
 await page.goto("https://practicetestautomation.com/practice-test-login/");
 await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/");
 await page.locator("//input[@id='username']").fill("student");
 await page.locator("//input[@id='password']").fill("Password123");
 await page.getByText("Submit").nth(0).click();
 await expect(page.locator("//h1[@class='post-title']")).toHaveText("Logged In Successfully");
});

test("test for softassert",async({page})=>{
 await page.goto("https://practicetestautomation.com/practice-test-login/");
 await expect.soft(page).toHaveURL("https://practicetestautomation.com/practice-test-login/");
 await page.locator("//input[@id='username']").fill("student");
 await page.locator("//input[@id='password']").fill("Password123");
 await page.getByText("Submit").nth(0).click();
 await expect.soft(page.locator("//h1[@class='post-title']")).toHaveText("Logged In Successfully");
})

test("by using another Soft Assert",({page})=>{
await 
})