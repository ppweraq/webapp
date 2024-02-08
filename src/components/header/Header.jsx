import React from 'react';
import './Header.css'
import logo from './../img/ava.png'
import heartImg from './../img/heart.png'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt="logo" className='logo'/>
                        <span>ALEX</span>
                    </div>
                    <div className="header__nav">
                        <img src={heartImg} alt="" className='logo'/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;