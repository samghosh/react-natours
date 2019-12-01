import React from 'react';

// Importing the CSS of the Navigation Part
import './Navigation.scss';

const NavigationBar = () => {
    return (
        <>
            <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="small-logo-container">
                            <a className="small-logo" href="#">↥Small Logo</a>
                        </div>
                    </div>
                    <div className="navbar-collapse collapse">
                
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active"><a href="#">Active</a></li>
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container-fluid big-logo-row">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 big-logo-container">
                            <h1 className="big-logo">↧Big Logo</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavigationBar;