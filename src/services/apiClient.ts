import { APIRequestContext } from '@playwright/test';

export class ApiClient {

    constructor(
        private readonly request: APIRequestContext
    ) {}

    async getProducts() {
        return await this.request.get(
            'https://automationexercise.com/api/productsList'
        );
    }

    async getBrands() {
        return await this.request.get(
            'https://automationexercise.com/api/brandsList'
        );
    }
}