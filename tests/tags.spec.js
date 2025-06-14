import {test,expect} from '@playwright/test'


// Smoke Test: Verify the basic functionality of the RedBus website
test('RedBus homepage loads correctly @smoke,@p1', async ({ page }) => {
  await page.goto('https://www.redbus.com');
  await expect.soft(page.locator('h1')).toHaveText('Book Bus Tickets Online');
});

test('Search for buses on RedBus homepage @smoke', async ({ page }) => {
  await page.goto('https://www.redbus.com');
  
  // Enter a source and destination for buses
  await page.fill('input[name="src"]', 'Mumbai');
  await page.fill('input[name="dest"]', 'Pune');
  
  await page.click('button[type="submit"]');
  
  // Ensure the search results page loads
  await expect.soft(page).toHaveURL(/search/);
  await expect(page.locator('.search-results')).toBeVisible();
});

// Regression Test: Ensure booking functionality has not been broken
test('Booking a bus ticket on RedBus @regression', async ({ page }) => {
  await page.goto('https://www.redbus.com');
  
  // Fill out the source and destination for bus search
  await page.fill('input[name="src"]', 'Mumbai');
  await page.fill('input[name="dest"]', 'Pune');
  await page.click('button[type="submit"]');
  
  // Select a bus from the results
  await page.click('.bus-selector');  // Assuming the bus selector button exists
  
  // Proceed to booking page
  await expect(page).toHaveURL(/bus-booking/);
  
  // Complete ticket booking (simplified)
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'testuser@example.com');
  await page.fill('input[name="phone"]', '1234567890');
  await page.click('button[type="submit"]');
  
  // Verify booking confirmation message
  await expect(page.locator('.booking-confirmation')).toHaveText('Booking Successful');
});

// Regression Test: Verify if the payment page loads correctly after a bus is selected
test('Payment page loads correctly after selecting a bus @smoke', async ({ page }) => {
  await page.goto('https://www.redbus.com');
  
  // Fill out the source and destination for bus search
  await page.fill('input[name="src"]', 'Mumbai');
  await page.fill('input[name="dest"]', 'Pune');
  await page.click('button[type="submit"]');
  
  // Select a bus from the results
  await page.click('.bus-selector');  // Assuming the bus selector button exists
  
  // Proceed to payment page
  await expect(page).toHaveURL(/payment/);
  await expect(page.locator('.payment-section')).toBeVisible();
});
