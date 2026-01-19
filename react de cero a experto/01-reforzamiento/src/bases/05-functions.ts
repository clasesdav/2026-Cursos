

function greet(name: string): string {
    return `hola ${name}`;
}

const greet2 = (name: string): string => {
    return `hola ${name}`;
};

const message = greet('Goku');
const message2 = greet2('Goku');

console.log(message, message2);

function getUser() {
    return {
        uid_: 'ABC-123',
        username: 'Dav123',
    };
}

const getUser2 = () => {
    return {
        uid_: 'ABC-123',
        username: 'Dav123',
    };
}

const user = getUser();
const user2 = getUser2();
console.log(user, user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

// myNumbers.forEach(function (value) {
//     console.log({ value });
// });
// myNumbers.forEach((value) => {
//     console.log({ value })
// });
myNumbers.forEach(console.log);
