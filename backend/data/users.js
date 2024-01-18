import bcrypt from 'bcryptjs';

//Sample Dummy Data

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10), //Higher the number the more secure but longer to decrypt
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@email.com',
        password: bcrypt.hashSync('123456', 10), //Higher the number the more secure but longer to decrypt
        isAdmin: false
    },
    {
        name: 'Jane Doe',
        email: 'jane@email.com',
        password: bcrypt.hashSync('123456', 10), //Higher the number the more secure but longer to decrypt
        isAdmin: false
    }
];

export default users;