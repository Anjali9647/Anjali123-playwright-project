const { test, expect } = require('playwright/test');

test("basic Alert", async ({ page }) => {
    await page.goto("https://demoqa.com/alerts");
    page.on('dialog', async (dialog) => {
        console.log("message on Alert", dialog.message());
        await dialog.accept();
    })
    await page.locator('button#alertButton').click();

})
test("basic With Wait Alert", async ({ page }) => {
    await page.goto("https://demoqa.com/alerts");
    const alert = page.waitForEvent('dialog');
    await page.locator('button#timerAlertButton').click();
    const timeAlert = await alert;
    console.log("Alert Message", timeAlert.message());
    await timeAlert.accept();

})

test("basic with prmopt Alert", async ({ page }) => {
    await page.goto("https://demoqa.com/alerts");
    page.on("dialog", async (dialog) => {
        await dialog.dismiss();
    });
    await page.locator('button#confirmButton').click();
    await expect(page.locator('span#confirmResult')).toContainText('You selected Cancel');
})

test("Alert with Message", async ({ page }) => {
    await page.goto("https://demoqa.com/alerts");
    const promptButton = page.locator('button#promtButton');
    await promptButton.waitFor({ state: 'visible' });
    await promptButton.scrollIntoViewIfNeeded();
    const alert= page.waitForEvent('dialog');
    await promptButton.click();
    const dialog=await alert;
    await dialog.accept('Anjaaaaaaaaa');
    await expect(page.locator('span#promptResult')).toContainText('You entered Anjaaaaaaaaa');
})

test.only("prompt Alert",async({page})=>{
await page.goto("https://demoqa.com/alerts");
page.on("dialog",async(dialog)=>
{
    await dialog.accept("Anjali");
})
page.locator('button#promtButton').click();
await page.pause();
await expect(page.locator('span#promptResult')).toContainText('You entered Anjali');
page.pause();
})
