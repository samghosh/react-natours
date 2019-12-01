import React from 'react';

// Importing the Images from the Assets
import NatImage1Large from '../../Assets/nat-1-large.jpg';
import NatImage1Small from '../../Assets/nat-1.jpg';

import NatImage2Large from '../../Assets/nat-2-large.jpg';
import NatImage2Small from '../../Assets/nat-2.jpg';

import NatImage3Large from '../../Assets/nat-3-large.jpg';
import NatImage3Small from '../../Assets/nat-3.jpg';

const About = () => {
    return (
        <>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>

                <div className="row">
                    <div className="col-6">
                        <h3 className="heading-tertiary u-margin-bottom-small">You&apos;re going to fall in love with nature</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui.
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                        </p>

                        <a href="#" className="btn-text">Learn more &rarr;</a>
                    </div>
                    <div className="col-6">
                        <div className="composition">

                            <img srcSet={ ` ${ NatImage1Small } 300w, ${ NatImage1Large } 1000w` }
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 1"
                                 className="composition__photo composition__photo--p1"
                                 src={ NatImage1Large } />
                            <img srcSet={ ` ${ NatImage2Small } 300w, ${ NatImage2Large } 1000w` }
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 2"
                                 className="composition__photo composition__photo--p2"
                                 src={ NatImage2Large } />

                            <img srcSet={ ` ${ NatImage3Small } 300w, ${ NatImage3Large } 1000w` }
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 3"
                                 className="composition__photo composition__photo--p3"
                                 src={ NatImage3Large } />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default About;