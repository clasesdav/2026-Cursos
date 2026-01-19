import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    test('should render with default values', () => {

        const name = 'Test item';

        render(<ItemCounter name={name} />)

        // screen.debug();
        expect(screen.getByText(name)).toBeDefined();
        // expect(screen.getByTestId('Test item')).not.toBeNull();

    });

    test('should render with custom quantity', () => {

        const name = 'Control de Nintengo';
        const quantity = -10;

        render(<ItemCounter name={name} quantity={quantity} />)

        // screen.debug();
        expect(screen.getByText(quantity)).toBeDefined();
        // expect(screen.getByTestId('Test item')).not.toBeNull();

    });

    test('should increase count when +1 button is pressed', () => {

        render(<ItemCounter name={'Test item'} quantity={1} />)

        const [buttonAdd] = screen.getAllByRole('button');

        // console.log(buttonAdd.innerHTML);

        fireEvent.click(buttonAdd);

        expect(screen.getByText('2')).toBeDefined();

    });

    test('should decrease count when -1 button is pressed', () => {
        const quantity = 5;
        render(<ItemCounter name={'Test item'} quantity={quantity} />)

        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('4')).toBeDefined();
    });

    test('should not decrease count when -1 button is pressed and queantity', () => {
        const quantity = 1;
        render(<ItemCounter name={'Test item'} quantity={quantity} />)

        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('1')).toBeDefined();
    });

    test('should change to red when count is 3', () => {
        const quantity = 1;
        const name = 'Test item';
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);

        // expect(itemText).toBeDefined(name);
        // console.log(itemText.style.color);
        expect(itemText.style.color).toBe('red');

    });

    test('should change to red when count is 1', () => {
        const quantity = 2;
        const name = 'Test item';
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);

        // expect(itemText).toBeDefined(name);
        // console.log(itemText.style.color);
        expect(itemText.style.color).toBe('black');

    });
});