import React from 'react'; 
import { string } from 'prop-types';

// Importing the Compiled CSS of the Header Component
import './Header.css';

// Importing the Logo Icon from the Assets
import logo from '../../Assets/logo-white.png';

// Importing the Button Component
import Button from '../Button/Button';

const Header = ({headerLogo, HeaderPrimaryText, HeaderSubText, buttonText}) => {
    return (
        <>
            <header className="header">
                <div className="logo-box">
                    <img src={headerLogo} className="logo" alt="Logo" />
                </div>

                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">{HeaderPrimaryText}</span>
                        <span className="heading-primary-sub">{HeaderSubText}</span>
                    </h1>

                    <Button buttonText={buttonText}></Button>
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