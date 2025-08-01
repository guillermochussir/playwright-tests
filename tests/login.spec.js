require('dotenv').config();
const { test, expect } = require('@playwright/test');

test('user is able to login', async ({ page }) => {
  const baseURL = process.env.BASE_URL;
  await page.goto(baseURL + '/login');
  await expect(page).toHaveTitle(/The Internet/);
  const root = page.locator('#content');
  await expect(root.locator('h2')).toHaveText('Login Page');
  const loginForm = root.locator('#login');
  await expect(loginForm).toBeVisible();
  await loginForm.locator('#username').fill('tomsmith');
  await loginForm.locator('#password').fill('SuperSecretPassword!');
  await loginForm.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(baseURL + '/secure');
});