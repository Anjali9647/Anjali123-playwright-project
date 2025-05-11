import { test, expect } from '@playwright/test'

test("Opening tab", async ({ browser }) => {
    const neww = await browser.newContext();
    const page = await neww.newPage();
    await page.goto('https://demoqa.com/browser-windows');
    const newTab = neww.waitForEvent('page');
    await page.getByRole('button', { name: 'New Tab' }).click();
    const tabb = await newTab;
    await expect(tabb.locator("#sampleHeading")).toHaveText('This is a sample page');
})

test('opening window', async ({ browser }) => {
    const newBrowser = await browser.newContext();
    const page = await newBrowser.newPage();
    await page.goto("https://demoqa.com/browser-windows");
    const newwindow = newBrowser.waitForEvent('page');
    await page.locator('#windowButton').click();
    const newWindowHandle = await newwindow;
    await expect(newWindowHandle.locator("h1#sampleHeading")).toHaveText("This is a sample page");
})

test.only('opening new Message in new Window', async ({ context }) => {
    const page = await context.newPage();
    await page.goto("https://demoqa.com/browser-windows");
    const newMessageWindow = context.waitForEvent('page');
    await page.locator('#messageWindowButton').click();
    const newwindowMessage = await newMessageWindow;
    await expect(newwindowMessage.locator('body')).toContainText(`Knowledge increases by sharing but not by saving. Please share this website with your friends and in your `);

})