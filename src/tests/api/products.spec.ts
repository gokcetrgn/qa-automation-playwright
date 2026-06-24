import { test, expect } from '@playwright/test';
import { ApiClient } from '../../services/ApiClient';

test('Get all products list', async ({ request }) => {

    const apiClient = new ApiClient(request);

    const response = await apiClient.getProducts();

    expect(response.status()).toBe(200);

});