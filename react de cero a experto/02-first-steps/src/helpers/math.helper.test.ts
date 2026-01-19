import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {
    test('should add two positive numbers', () => {
        // ! 1.- Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        expect(result).toBe(a + b);

    });
});

describe('subtract', () => {
    test('should subtract two positive numbers', () => {
        // ! 1.- Arrange
        const a = -6;
        const b = 2;

        // ! 2. Act
        const result = subtract(a, b);
        console.log({ result })

        // ! 3. Assert
        expect(result).toBe(a - b);

    });
});

describe('multiply', () => {
    test('should multiply two positive numbers', () => {
        // ! 1.- Arrange
        const a = -6;
        const b = 2;

        // ! 2. Act
        const result = multiply(a, b);
        console.log({ result })

        // ! 3. Assert
        expect(result).toBe(a * b);

    });
});

describe('divide', () => {
    test('should divide two positive numbers', () => {
        // ! 1.- Arrange
        const a = -6;
        const b = 2;

        // ! 2. Act
        const result = divide(a, b);
        console.log({ result })

        // ! 3. Assert
        expect(result).toBe(a / b);

    });
});