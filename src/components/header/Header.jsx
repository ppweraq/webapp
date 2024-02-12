import React from 'react';
import './Header.css'
// import logo from './../img/ava.png'
// import heartImg from './../img/heart.png'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={'./img/icons/ava.png'} alt="logo" className='logo'/>
                        <span>ALEX</span>
                    </div>
                    <div className="header__nav">
                        <img src={'./img/icons/heart.png'} alt="" className='logo'/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;