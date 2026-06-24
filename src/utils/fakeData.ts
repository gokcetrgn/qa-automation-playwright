import { faker } from '@faker-js/faker';

export function generateUser() {

    return {

        name: faker.person.firstName(),

        email: faker.internet.email(),

        password: faker.internet.password(),

        city: faker.location.city(),

        phone: faker.phone.number(),

        company: faker.company.name()
    };
}