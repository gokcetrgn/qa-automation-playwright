import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 1,

  workers: process.env.CI ? 1 : 4,

  timeout: 30000,

  expect: {
    timeout: 5000,
  },

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'https://automationexercise.com',

    viewport: {
      width: 1440,
      height: 900,
    },

    screenshot: 'only-on-failure',

    trace: 'on-first-retry',

    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'iphone-13',
      use: { ...devices['iPhone 13'] },
    },

    {
      name: 'pixel-7',
      use: { ...devices['Pixel 7'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },


    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});