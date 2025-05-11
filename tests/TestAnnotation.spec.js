import { test, expect } from '@playwright/test';

test.describe('HerokuApp Login Tests', () => {
  let context;
  let page;

  // Run once before all tests
  test.beforeAll(async ({ browser }) => {
    console.log('>>> beforeAll: Launching context...');
    context = await browser.newContext();
  });

  // Run once after all tests
  test.afterAll(async () => {
    console.log('>>> afterAll: Closing context...');
    await context.close();
  });

  // Run before each test
  test.beforeEach(async () => {
    console.log('>>> beforeEach: Opening new page...');
    page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/login');
  });

  // Run after each test
  test.afterEach(async () => {
    console.log('>>> afterEach: Closing page...');
    await page.close();
  });

  test('should login successfully with valid credentials', async () => {
    await test.step("this step for entering username",async()=>{
    await page.fill('#username', 'tomsmith');
    });
    await test.step("this step for entering password",async()=>{
    await page.fill('#password', 'SuperSecretPassword!');
    });
    await test.step("this step for click submit",async()=>{
    await page.click('button[type="submit"]');
    });
    await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
  });

  test.skip('should show error with invalid credentials', async () => {
    await page.fill('#username', 'invaliduser');
    await page.fill('#password', 'invalidpass');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');
  });
});
