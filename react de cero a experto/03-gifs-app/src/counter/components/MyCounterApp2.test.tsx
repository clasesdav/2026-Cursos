import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { fireEvent, render, screen } from "@testing-library/react";
// import { useCounter } from "../hooks/useCounter";
// import { useCounter } from "../hooks/useCounter";

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 40,
        handleAdd: handleAddMock,//vi.fn(),
        handleSubtract: handleSubtractMock,//vi.fn(),
        handleReset: handleResetMock,// vi.fn(),
    })
}));

describe('MyCounterApp', () => {

    test('should render the component', () => {
        render(<MyCounterApp />);

        // screen.debug();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
            `counter: 40`
        );

        // expect(2).toBe(1);

        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
    });

    test('should call handleAdd id button is clicked', () => {

        render(<MyCounterApp />);

        const button = screen.getByRole('button', { name: '+1' });

        fireEvent.click(button);

        expect(handleAddMock).toHaveBeenCalled();
        expect(handleAddMock).toHaveBeenCalledTimes(1);
        expect(handleSubtractMock).not.toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();

    });

});