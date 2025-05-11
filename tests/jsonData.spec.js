import {test,expect} from '@playwright/test'
const fs=require('fs');
const testdata=require('./data.json')
const path = require('path');

test("taking data from json file",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("input#username").fill(testdata.username);
    await page.locator("input#password").fill(testdata.password);
    await page.locator("button#submit").click();
})

test.only("taking json file from dynamically",async({page})=>{
    const filePath = path.join(__dirname, 'data.json'); 
    const rawData=fs.readFileSync(filePath,'utf-8');
    const testdata=JSON.parse(rawData);
    console.log(process.cwd())
    await test.step("first go to the url",async()=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    })
    await test.step('enter the username',async()=>{
    await page.locator("input#username").fill(testdata.username);
    })
    await test.step('enter the password',async()=>{
    await page.locator("input#password").fill(testdata.password);
   })
   await test.step("click on submit button",async()=>{
    await page.locator("button#submit").click();
    })
})