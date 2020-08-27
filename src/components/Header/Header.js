import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="text-center bg-dark text-white">
            <h1>
                <img className="logo" src={logo} alt={logo}></img>
                Best Online Courses to Kickstart Your Career
            </h1>
        </div>
    );
};

export default Header;