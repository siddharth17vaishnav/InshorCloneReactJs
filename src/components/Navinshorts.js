import React from 'react';
import HamburgerDrawer from"./HamburgerDrawer";
import './Navinshorts.css';
const Navinshorts = ({setCategory}) => {
    return (
        <div className="nav">
            <div className="icons">
                <HamburgerDrawer setCategory={setCategory}/>
            </div>
            <img className="logo"
            src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' height="80%" alt="logo"/>
        </div>
    )
}

export default Navinshorts
