import { test, expect } from '@playwright/test';
import { loginPage } from '../../pages/loginPage';

test('test', async ({ page }) => {
    const login=  new loginPage(page);
  await login.urlForLogin();
  await login.loginFunction("student","Password123");
 
});