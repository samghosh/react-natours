import React from 'react'; 
import { string } from 'prop-types';

// Importing the Compiled CSS of the Header Component
import './Header.css';

// Importing the Logo Icon from the Assets
import logo from '../../Assets/logo-white.png';

// Importing the Button Component
import Button from '../Button/Button';

<<<<<<< HEAD
const Header = ({headerLogo, HeaderPrimaryText, HeaderSubText, buttonText}) => {
=======
const Header = ({ headerLogo, HeaderPrimaryText, HeaderSubText, buttonText }) => {
>>>>>>> parent of 9432730... Project Updated to suit a different portfolio
    return (
        <>
            <header className="header">
                <div className="logo-box">
<<<<<<< HEAD
                    <img src={headerLogo} className="logo" alt="Logo" />
=======
                    <img src={ headerLogo } className="logo" alt="Logo" />
>>>>>>> parent of 9432730... Project Updated to suit a different portfolio
                </div>

                <div className="text-box">
                    <h1 className="heading-primary">
<<<<<<< HEAD
                        <span className="heading-primary-main">{HeaderPrimaryText}</span>
                        <span className="heading-primary-sub">{HeaderSubText}</span>
                    </h1>

                    <Button buttonText={buttonText}></Button>
=======
                        <span className="heading-primary-main" data-testid='header-primary-text'>{HeaderPrimaryText}</span>
                        <span className="heading-primary-sub" data-testid='header-sub-text'>{HeaderSubText}</span>
                    </h1>

                    <Button buttonText={ buttonText }></Button>
>>>>>>> parent of 9432730... Project Updated to suit a different portfolio
                </div>
            </header>
        </>
    )
};

Header.defaultProps = {
    headerLogo: logo
}

Header.propTypes = {
    buttonText: string.isRequired, 
    HeaderPrimaryText: string.isRequired, 
    HeaderSubText: string.isRequired,
    headerLogo: string
}

export default Header; 