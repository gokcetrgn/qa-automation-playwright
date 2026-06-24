import { faker } from '@faker-js/faker';

export const generateUser = () => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        company: faker.company.name()
    };
};