import React from 'react';
import { string } from 'prop-types';

// Importing the Compiled CSS of the Button Component
import './Button.css';

const Button = ({ buttonText, buttonType }) => {
    return (
        <>
            <a href="#" className={ `btn ${ buttonType }` }>
<<<<<<< HEAD
                {buttonText}
=======
                <span data-testid="button-text">{buttonText}</span>
>>>>>>> parent of 9432730... Project Updated to suit a different portfolio
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