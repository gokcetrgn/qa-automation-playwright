# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\Login.spec.ts >> @smoke Invalid Password
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
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]: test@test.com
        - textbox "Password" [ref=e45]: wrongpassword
        - paragraph [ref=e46]: Your email or password is incorrect!
        - button "Login" [ref=e47] [cursor=pointer]
    - heading "OR" [level=2] [ref=e49]
    - generic [ref=e51]:
      - heading "New User Signup!" [level=2] [ref=e52]
      - generic [ref=e53]:
        - textbox "Name" [ref=e54]
        - textbox "Email Address" [ref=e55]
        - button "Signup" [ref=e56] [cursor=pointer]
  - contentinfo [ref=e57]:
    - generic [ref=e62]:
      - heading "Subscription" [level=2] [ref=e63]
      - generic [ref=e64]:
        - textbox "Your email address" [ref=e65]
        - button "" [ref=e66] [cursor=pointer]:
          - generic [ref=e67]: 
        - paragraph [ref=e68]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e72]: Copyright © 2021 All rights reserved
  - text: 
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