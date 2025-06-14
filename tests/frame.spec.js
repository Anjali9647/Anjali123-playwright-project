import {test,expect} from '@playwright/test'


test("frame Testcase",async({page})=>{
await page.goto("https://demo.automationtesting.in/Frames.html");
await page.setDefaultTimeout(3000);
const frameLoctor=page.frameLocator("//iframe[@id='singleframe']");
await frameLoctor.locator('//input[@type="text"]').nth(0).fill("Anjali masal");
await expect(frameLoctor.locator('//input[@type="text"]').nth(0)).toHaveValue("Anjali masal");
})

test("neasted frame",async({page})=>{
await page.goto("https://demo.automationtesting.in/Frames.html");
await page.locator("//a[@href='#Multiple']").click();
const outerFrame=await page.frameLocator("iframe[src='MultipleFrames.html']");
await page.setDefaultTimeout(30000);
const innerFrame=outerFrame.frameLocator("ifra");
await innerFrame.locator("//input[@type='text']").fill("Anjali Masal");
expect(outerFrame.locator("//div[@class='iframe-container']/h5")).toHaveText("Nested iFrames");
})

//in above example we used the framelocator and this test we used frame method only
test.only("nested frame for without",async({page})=>{
await page.goto("https://demoqa.com/frames");
const frameLocator=await page.frame("frame1");
 await expect(frameLocator.locator("//h1[@id='sampleHeading']").nth(0)).toHaveText("This is a sample page");
})
