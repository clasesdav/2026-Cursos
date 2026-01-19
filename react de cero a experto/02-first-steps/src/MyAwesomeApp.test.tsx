import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from '@testing-library/react';

describe('MyAwesomeApp', () => {
    test('should render firstName and LastName - screen', () => {

        // console.log(screen);

        // const { container } = render(<MyAwesomeApp />);
        render(<MyAwesomeApp />);
        // screen.debug();

        // const h1 = screen.getByRole('heading', {
        //     level: 1
        // });

        const h1 = screen.getByTestId('first-name-title');

        // console.log(h1.innerHTML);

        // const h1 = container.querySelector('h1')
        // expect(h1?.innerHTML).toContain('David');
        // const h3 = container.querySelector('h3')
        // expect(h3?.innerHTML).toContain('Serrudo');

    });

    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });

    test('should match snapshot', () => {
        render(<MyAwesomeApp />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    });

})