import { request } from '@playwright/test';
import { generateUser } from './fakeData';

export async function createUser() {

    const apiContext = await request.newContext();

    const fakeUser = generateUser();

    const response = await apiContext.post(
        'https://automationexercise.com/api/createAccount',
        {
            form: {
                name: fakeUser.name,
                email: fakeUser.email,
                password: fakeUser.password,
                title: 'Miss',
                birth_date: '10',
                birth_month: '5',
                birth_year: '2000',
                firstname: fakeUser.name,
                lastname: 'Test',
                company: fakeUser.company,
                address1: 'Istanbul',
                address2: 'Turkey',
                country: 'India',
                zipcode: '34000',
                state: 'Istanbul',
                city: fakeUser.city,
                mobile_number: fakeUser.phone
            }
        }
    );

    console.log(await response.text());

    return fakeUser;
}
export async function deleteUser(email: string, password: string) {

    const apiContext = await request.newContext();

    await apiContext.post(
        'https://automationexercise.com/api/deleteAccount',
        {
            form: {
                email,
                password
            }
        }
    );
}