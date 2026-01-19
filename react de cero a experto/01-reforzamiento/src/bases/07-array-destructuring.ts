const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , t] = characterNames;

// console.log({ t });

const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [letters, number] = returnsArrayFn();
// console.log(letters, number);

// Tarea

const useState = (value: string) => {
    return [
        value,
        (newValue: string) => {
            console.log(newValue);
        },
    ] as const;
};

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta 2');