require('dotenv').config();
const { test, expect } = require('@playwright/test');

test.describe('Login flow', () => {
  let baseURL;
  let root;

  test.beforeEach(async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'area', description: 'login' });

    baseURL = process.env.BASE_URL;
    await test.step('Go to Login Page', async () => {
      await page.goto(`${baseURL}/login`);
      root = page.locator('#content');
      await expect(root.locator('h2')).toHaveText('Login Page');
    });
  });

  test('login form is visible @login @smoke', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'suite', description: 'smoke' });

    await test.step('Assert login form container is visible', async () => {
      await expect(root.locator('#login')).toBeVisible();
    });
  });

  test('user can log in with valid credentials @login @regression', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'story', description: 'Successful login' });
    testInfo.annotations.push({ type: 'severity', description: 'critical' });
    testInfo.annotations.push({ type: 'suite', description: 'regression' });

    const loginForm = root.locator('#login');
    await test.step('Fill in credentials', async () => {
      await loginForm.locator('#username').fill('tomsmith');
      await loginForm.locator('#password').fill('SuperSecretPassword!');
    });

    await test.step('Submit login form', async () => {
      await loginForm.locator('button[type="submit"]').click();
    });

    await test.step('Verify redirect to secure area', async () => {
      await expect(page).toHaveURL(`${baseURL}/secure`);
    });
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshot = await page.screenshot({ fullPage: true });
      await testInfo.attach('Failure Screenshot', {
        body: screenshot,
        contentType: 'image/png'
      });
    }
  });
});