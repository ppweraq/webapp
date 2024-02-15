import React, { useState } from 'react';
import './Categories.css'
import { Link, NavLink } from 'react-router-dom';

const Categories = () => {

    const [name, setName] = useState(true);
    const reName = () => setName(!name)

    return (
        <div>
            <div className="categories">
                <NavLink to='/' onClick={reName} className="categories__item" >
                    Кроссовка
                </NavLink>
                <NavLink to='/clothes' onClick={reName} className="categories__item">
                    Одежда
                </NavLink>
  
            </div>
            <div className="categories__filter">
                <div className="categ__name">
                    <div >{name ? 'Кроссовка' : 'Одежда'}</div>
                </div>
                <Link to='/filter' className="filter">
                    <img src={'./img/icons/filter.png'} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Categories;