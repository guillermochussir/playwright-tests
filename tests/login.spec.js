require('dotenv').config();
const { test, expect } = require('@playwright/test');

test.describe('Login flow', () => {
  let baseURL;
  let root;

  test.beforeEach(async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'tag', description: 'login' });

    baseURL = process.env.BASE_URL;
    await page.goto(`${baseURL}/login`);
    root = page.locator('#content');
    await expect(root.locator('h2')).toHaveText('Login Page');
  });

  test('login form is visible @login @smoke', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'tag', description: 'smoke' });

    await expect(root.locator('#login')).toBeVisible();
  });

  test('user can log in with valid credentials @login @regression', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'tag', description: 'regression' });

    const loginForm = root.locator('#login');
    await loginForm.locator('#username').fill('tomsmith');
    await loginForm.locator('#password').fill('SuperSecretPassword!');
    await loginForm.locator('button[type="submit"]').click();
    await expect(page).toHaveURL(`${baseURL}/secure`);
  });
});