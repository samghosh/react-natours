import React from 'react';

// Importing the Re-usable Components for Stiching them here
import Header from '../Components/Header/Header';
import About from '../Components/About/About';

const Home = () => {
    const headerButtonText = 'discover our tours';
    const headerPrimaryText = 'Outdoors';
    const headerSubText = 'is where life happens';

    return (
        <>
            <Header 
                buttonText={ headerButtonText }
                HeaderPrimaryText={ headerPrimaryText }
                HeaderSubText={ headerSubText }
            />
            <About />
        </>
    )
};

export default Home;