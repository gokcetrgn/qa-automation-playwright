# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\Login.spec.ts >> @smoke Invalid Email
- Location: src\tests\ui\Login.spec.ts:15:10

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with undefined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - insertion [ref=e11]:
        - iframe [ref=e13]
      - list [ref=e16]:
        - listitem [ref=e17]:
          - link " Home" [ref=e18]:
            - /url: /
            - generic [ref=e19]: 
            - text: Home
        - listitem [ref=e20]:
          - link " Products" [ref=e21]:
            - /url: /products
            - generic [ref=e22]: 
            - text: Products
        - listitem [ref=e23]:
          - link " Cart" [ref=e24]:
            - /url: /view_cart
            - generic [ref=e25]: 
            - text: Cart
        - listitem [ref=e26]:
          - link " Signup / Login" [ref=e27]:
            - /url: /login
            - generic [ref=e28]: 
            - text: Signup / Login
        - listitem [ref=e29]:
          - link " Test Cases" [ref=e30]:
            - /url: /test_cases
            - generic [ref=e31]: 
            - text: Test Cases
        - listitem [ref=e32]:
          - link " API Testing" [ref=e33]:
            - /url: /api_list
            - generic [ref=e34]: 
            - text: API Testing
        - listitem [ref=e35]:
          - link " Video Tutorials" [ref=e36]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e37]: 
            - text: Video Tutorials
        - listitem [ref=e38]:
          - link " Contact us" [ref=e39]:
            - /url: /contact_us
            - generic [ref=e40]: 
            - text: Contact us
  - generic [ref=e43]:
    - generic [ref=e45]:
      - heading "Login to your account" [level=2] [ref=e46]
      - generic [ref=e47]:
        - generic: TKs8XG2l9ykbn6xFc2kwXA3DV5pemPfKqiqnEIMrg6FkYaNa2gY9FQuoglKFbMRs
        - textbox "Email Address" [ref=e48]: wrong@test.com
        - textbox "Password" [ref=e49]: "123456"
        - button "Login" [ref=e50] [cursor=pointer]
    - heading "OR" [level=2] [ref=e52]
    - generic [ref=e54]:
      - heading "New User Signup!" [level=2] [ref=e55]
      - generic [ref=e56]:
        - generic: TKs8XG2l9ykbn6xFc2kwXA3DV5pemPfKqiqnEIMrg6FkYaNa2gY9FQuoglKFbMRs
        - textbox "Name" [ref=e57]
        - textbox "Email Address" [ref=e58]
        - generic: signup
        - button "Signup" [ref=e59] [cursor=pointer]
  - contentinfo [ref=e60]:
    - generic [ref=e65]:
      - heading "Subscription" [level=2] [ref=e66]
      - generic [ref=e67]:
        - textbox "Your email address" [ref=e68]
        - button "" [ref=e69] [cursor=pointer]:
          - generic [ref=e70]: 
        - paragraph [ref=e71]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e75]: Copyright © 2021 All rights reserved
  - link "" [ref=e76]:
    - /url: "#top"
    - generic [ref=e77]: 
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/pagesFixture';
  2  | import { loginData, users } from '../../data/loginData/login';
  3  | 
  4  | //test('User should login successfully', async ({ loginPage  }) => {
  5  |   //  await loginPage.navigateToLoginPage();
  6  | 
  7  |     //await loginPage.login(
  8  |       //  loginData.validUser.email,
  9  |         //loginData.validUser.password);
  10 | 
  11 | //    await expect(loginPage.loggedInText).toBeVisible();});
  12 | 
  13 | users.forEach(user => {
  14 | 
  15 |      test(`@smoke ${user.scenario}`,async ({ loginPage }) => {
  16 | 
  17 |         await loginPage.navigateToLoginPage();
  18 | 
  19 |         await loginPage.login(
  20 |             user.email,
  21 |             user.password
  22 |         );
  23 | 
  24 |         if (user.expected === 'success') {
  25 |             await expect(loginPage.loggedInText).toBeVisible();
  26 |         } else {
> 27 |             await expect(loginPage.loginErrorMessage).toBeVisible();
     |                                                       ^ Error: toBeVisible can be only used with Locator object, was called with undefined
  28 |         }
  29 |     });
  30 | 
  31 | });
```