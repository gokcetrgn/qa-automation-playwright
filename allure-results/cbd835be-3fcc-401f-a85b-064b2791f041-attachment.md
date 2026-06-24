# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\Login.spec.ts >> @smoke Invalid Email
- Location: src\tests\ui\Login.spec.ts:15:10

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Test source

```ts
  1 | import { Page } from '@playwright/test';
  2 | 
  3 | export class BasePage {
  4 |     constructor(protected page: Page) {}
  5 | 
  6 |     async navigate(url: string) {
> 7 |         await this.page.goto(url);
    |                         ^ Error: page.goto: Test ended.
  8 |     }
  9 | }
```