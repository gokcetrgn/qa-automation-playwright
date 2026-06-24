import { test, expect } from '@playwright/test';
import { ApiClient } from '../../services/ApiClient';

test('Get all products list', async ({ request }) => {

    const apiClient = new ApiClient(request);

    const response = await apiClient.getBrands();

    expect(response.status()).toBe(200);

});