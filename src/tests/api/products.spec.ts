import { test, expect } from '@playwright/test';

test('Get all products list', async ({ request }) => {

    const response = await request.get(
        'https://automationexercise.com/api/productsList'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(200);
    expect(body.products.length).toBeGreaterThan(0);

    console.log(body.products[0]);
});