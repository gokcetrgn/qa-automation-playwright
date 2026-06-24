import {Page, Locator} from '@playwright/test'

export class LoginPage{
    readonly page : Page;
    readonly signupLoginButton: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loggedInText: Locator;

    constructor(page : Page)
    {
        this.page = Page;
        this.signupLoginButton = page.getByRole('link', { name: 'Signup / Login' });
        this.emailInput = page.locator('input[data-qa="login-email"]');
        this.passwordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');
        this.loggedInText = page.locator('a').filter({ hasText: 'Logged in as' });

    }

    async navigateToLoginPage() {
            await this.signupLoginButton.click();

    }

    async login(email: string, password: string) {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }
}