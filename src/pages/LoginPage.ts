import {Page, Locator} from '@playwright/test'
import { BasePage } from './BasePage';


export class LoginPage extends BasePage{
    readonly signupLoginButton: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loggedInText: Locator;
    readonly  loginErrorMessage : Locator;

    constructor(page : Page)
    {
        super(page);
        this.signupLoginButton = page.getByRole('link', { name: 'Signup / Login' });
        this.emailInput = page.locator('input[data-qa="login-email"]');
        this.passwordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');
        this.loggedInText = page.locator('a').filter({ hasText: 'Logged in as' });
        this.loginErrorMessage = this.loginErrorMessage = page.locator('p', {hasText: 'Your email or password is incorrect!'});
    }


    async navigateToLoginPage() {
            await this.navigate('/');
            await this.signupLoginButton.click();
    }

    async login(email: string, password: string) {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }
}