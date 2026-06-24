import { test, expect } from '../../fixtures/pagesFixture';
import { loginData } from '../../data/loginData/login';

test('User should login successfully', async ({ loginPage  }) => {
    await loginPage.navigateToLoginPage();

    await loginPage.login(
        loginData.validUser.email,
        loginData.validUser.password
    );

    await expect(loginPage.loggedInText).toBeVisible();
});