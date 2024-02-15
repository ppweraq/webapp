import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header>
                <div className="header__row">
                    <a href='/profile' className="header__logo">
                        <img src={'./img/icons/ava.png'} alt="logo" className='logo'/>
                        <span>ALEX</span>
                    </a>
                    <div className="header__nav">
                        <img src={'./img/icons/heart.png'} alt="" className='logo'/>
                    </div>
                </div>
        </header>
    );
};

export default Header;