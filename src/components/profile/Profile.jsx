import React from 'react';
import './profile.css'
import profileImg from './../img/ava.png'

const Profile = () => {
    return (
        <div>
            <header className='profile__head'>
                Профиль
            </header>
            <div className="container">

                <div className="profile__title">
                    <div className="profile__img">
                        <img src={profileImg} alt="" />
                    </div>
                    <div className="profile__name">
                    |Alexon|
                    </div>
                </div>
                <div className="profile__content">
                    <div className="right__content">
                        <div className="payment">
                            <p>Способ оплаты</p>
                            <a href="#!">+</a>
                        </div>
                        <div className="delivery">
                            <p>Доставки</p>
                            <p className='title'>В ближайшее время доставка не ожидается</p>
                        </div>
                        <div className="other"></div>
                    </div>
                    <div className="left__content">
                        <div className="delivery__details">
                            <p>Данные доставки</p>
                            <ul>ФИО получателя</ul>
                            <ul>Телефон</ul>
                            <ul>Город</ul>
                            <ul>Пункт</ul>
                            <a href="#!">Редактировать</a>

                        </div>
                        <div className="other-el"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;