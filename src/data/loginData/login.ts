export const loginData = {
    validUser: {
        email: 'gokcenaztorgan@gmail.com',
        password: '123456789.'
    }
};
export const users = [
    {
        scenario: 'Valid Login',
        email: 'gokcenaztorgan@gmail.com',
        password: '123456789.',
        expected: 'success'
    },
    {
        scenario: 'Invalid Password',
        email: 'test@test.com',
        password: 'wrongpassword',
        expected: 'fail'
    },
    {
        scenario: 'Invalid Email',
        email: 'wrong@test.com',
        password: '123456',
        expected: 'fail'
    }
];