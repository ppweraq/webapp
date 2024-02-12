import React from 'react';
import './Categories.css'
// import filterImg from './img/icons/filter.png'

const Categories = () => {
    return (
        <div>
            <div className="categories">
                <div className="categories__sneaker">
                    Кроссовки
                </div>
                <div className="categories__clothes">
                    Одежда
                </div>
            </div>
            <div className="categories__filter">
                <div className="categ__name">
                    Кроссовки
                </div>
                <div className="filter">
                    <img src={'./img/icons/filter.png'} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Categories;