import React from 'react';
import { string, bool } from 'prop-types';

// Importing the Compiled CSS of the Button Component
import './Button.css';

const Button = ({ buttonText, buttonType, buttonAnimated }) => {
    let butonAnimatedClassName;
    if(buttonAnimated){
        butonAnimatedClassName = 'btn-animated';
    } else {
        butonAnimatedClassName = 'btn-not-animated';
    }
    return (
        <>
            <a href="#" className={ `btn ${ buttonType } ${ butonAnimatedClassName }` }>
                <span data-testid="button-text">{buttonText}</span>
            </a>
        </>
    )
};

Button.defaultProps = {
    buttonType: 'btn-white',
    buttonAnimated: false
}

Button.propTypes = {
    buttonText: string.isRequired,
    buttonAnimated: bool,
    buttonType: string
}

export default Button;