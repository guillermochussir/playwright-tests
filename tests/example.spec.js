const { test, expect } = require('@playwright/test');

test('homepage has title', async ({ page }) => {
  const baseURL = process.env.BASE_URL;
  await page.goto(baseURL + '/login');
  await expect(page).toHaveTitle(/The Internet/);
});