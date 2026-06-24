import { test, expect } from '../../fixtures/pagesFixture';
import { loginData, users } from '../../data/loginData/login';

//test('User should login successfully', async ({ loginPage  }) => {
  //  await loginPage.navigateToLoginPage();

    //await loginPage.login(
      //  loginData.validUser.email,
        //loginData.validUser.password);

//    await expect(loginPage.loggedInText).toBeVisible();});

users.forEach(user => {

     test(`@smoke ${user.scenario}`,async ({ loginPage }) => {

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            user.email,
            user.password
        );

        if (user.expected === 'success') {
            await expect(loginPage.loggedInText).toBeVisible();
        } else {
            await expect(loginPage.loginErrorMessage).toBeVisible();
        }
    });

});