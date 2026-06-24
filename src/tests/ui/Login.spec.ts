import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('User should login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('/');

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'gokcenaztorgan@gmail.com',
        '123456789.'
    );

    await expect(loginPage.loggedInText).toBeVisible();
});