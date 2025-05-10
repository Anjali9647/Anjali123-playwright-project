import {test,expect} from '@playwright/test'
import { trace } from 'console';
test.use({trace:'on',video:'on'});
test.only("dropdown example",async({page})=>{
await page.goto("https://demoqa.com/select-menu");
await page.locator('#withOptGroup').click();
  await page.locator('div[id^="react-select"] div:has-text("Group 1, option 1")').click();

  ///this is first time try

//await page.waitForSelector('.css-1uccc91-singleValue');
//await page.setDefaultTimeout('12000');
//await page.locator('.css-1uccc91-singleValue',{hasText:'Group 2, option 1'}).click();
//await option.waitFor({state:'visible'});
//await page.getByText('Group 2, option 1').nth(1).click();
//await expect(page.locator('div#withOptGroup')).toContainText('Group 2, option 1');
})

test('this is select Tag Dropdown',async({page})=>{
await page.goto("https://demoqa.com/select-menu");
await page.locator('#oldSelectMenu').selectOption('Yellow');
})
