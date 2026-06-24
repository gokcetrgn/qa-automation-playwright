import { test, expect } from '@playwright/test';

test('Get brands list', async ({ request }) => {

    const response = await request.get(
        'https://automationexercise.com/api/brandsList'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(200);
    expect(body.brands.length).toBeGreaterThan(0);
});