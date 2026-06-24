import { test, expect } from '../../fixtures/pagesFixture';
import { createUser } from '../../utils/apiHelper';

test('User should login successfully with API created user',
async ({ loginPage }) => {

    const user = await createUser();

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        user.email,
        user.password
    );

    await expect(
        loginPage.loggedInText
    ).toBeVisible();
});