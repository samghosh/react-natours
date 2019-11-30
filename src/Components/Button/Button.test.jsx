import React from 'react';
import Button from './Button';
import { render } from '@testing-library/react';

it('matches snapshot', () => {
    const { asFragment } = render(<Button buttonText='Button Text' />);
    expect(asFragment()).toMatchSnapshot();
});

it('should render props passed exactly', () => {
    const { getByTestId } = render(<Button buttonText='Hello World' />);
    expect(getByTestId('button-text').textContent).toBe('Hello World');
});