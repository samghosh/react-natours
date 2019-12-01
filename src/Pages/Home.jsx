<<<<<<< HEAD
import React from 'react';

// Importing the Pages for Stiching here
import Navigation from './Navigation/Navigation';

const Home = () => {
    return(
        <>
            <Navigation />
=======
import React from 'react'; 
import Header from '../Components/Header/Header';

const Home = () => {
    const headerButtonText = 'discover our tours';
    const headerPrimaryText = 'Outdoors';
    const headerSubText = 'is where life happens';

    return (
        <>
            <Header 
                buttonText={headerButtonText}
                HeaderPrimaryText={headerPrimaryText}
                HeaderSubText={headerSubText}
            />
>>>>>>> parent of 9432730... Project Updated to suit a different portfolio
        </>
    )
};

export default Home;