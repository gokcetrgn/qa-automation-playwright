import { test, expect } from '@playwright/test';

test('login page visual test', async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/login'
    );

    await page.locator('h2')
        .evaluate(el => el.textContent = 'TEST');

    await expect(page)
        .toHaveScreenshot('login-page.png');
});

test('login form visual test', async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/login'
    );

    await expect(
        page.locator('.login-form')
    ).toHaveScreenshot('login-form.png');
});