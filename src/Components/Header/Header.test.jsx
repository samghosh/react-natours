import { render } from '@testing-library/react';
import React from 'react';
import Header from './Header';

it('matches snapshot', () => {
    const { asFragment } = render(
        <Header 
            HeaderPrimaryText='Header Primary Text' 
            HeaderSubText='Header Sub Text'
            buttonText='Header Button Text'
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

it('should render the passed props properly', () => {
    const { getByTestId } = render(
        <Header 
            HeaderPrimaryText='Header Primary Text' 
            HeaderSubText='Header Sub Text'
            buttonText='Header Button Text'
        />
    );
    expect(getByTestId('header-primary-text').textContent).toBe('Header Primary Text');
    expect(getByTestId('header-sub-text').textContent).toBe('Header Sub Text');
    expect(getByTestId('button-text').textContent).toBe('Header Button Text');
});