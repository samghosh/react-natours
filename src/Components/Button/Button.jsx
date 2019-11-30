import React from 'react';
import { string } from 'prop-types';

// Importing the Compiled CSS of the Button Component
import './Button.css';

const Button = ({ buttonText, buttonType }) => {
    return (
        <>
            <a href="#" className={ `btn ${ buttonType }` }>
                <span data-testid="button-text">{buttonText}</span>
            </a>
        </>
    )
};

Button.defaultProps = {
    buttonType: 'btn-white'
}

Button.propTypes = {
    buttonText: string.isRequired,
    buttonType: string
}

export default Button;