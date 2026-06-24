import { APIRequestContext } from '@playwright/test';

export class ApiClient {

    constructor(private request: APIRequestContext) {}

    async getProducts() {
        return await this.request.get('/api/productsList');
    }

    async getBrands() {
        return await this.request.get('/api/brandsList');
    }
}

