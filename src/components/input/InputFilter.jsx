import React from 'react';
import './inputFilter.css'
import BackBtn from '../Button/BackBtn';

const InputFilter = () => {

    return (
        <div>
            <BackBtn/>
            <header className="head__title">
                Фильтр
            </header>
            <div className='container'>
                <div className="price">
                    <div className="left-side-input">
                        <div className="input__title">
                            Цена
                        </div>
                        <div className="form">
                            <div className="from">
                                <input type="text" placeholder='от'/>
                            </div>
                            <div className="to">
                                <input type="text" placeholder='до'/>
                            </div>
                        </div>
                    </div>
                    <div className="right-side-input">
                        <button className='btn-filter btn-right'>По убыванию</button>
                        <button className='btn-filter btn-right'>По возрастанию</button>
                    </div>
                </div>
                <div className="brand">
                    <div className="input__title">
                            Бренд
                    </div>
                    <div className="collection">
                        <button className='btn-filter brand_name'>Adidas</button>
                        <button className='btn-filter brand_name'>Burberry</button>
                        <button className='btn-filter brand_name'>Fila</button>
                        <button className='btn-filter brand_name'>Crocs</button>
                        <button className='btn-filter brand_name'>Nike</button>

                    </div>
                </div>
                <div className="filter__color">
                    <div className="input__title">
                        Цвет
                    </div>
                    <div className="collection">
                        <button className='btn-filter brand_name'>Белый</button>
                        <button className='btn-filter brand_name'>Черный</button>
                        <button className='btn-filter brand_name'>Голубой</button>
                        <button className='btn-filter brand_name'>Красный</button>
                        <button className='btn-filter brand_name'>Желтый</button>

                    </div>
                </div>
                <div className="filter__size">
                    <div className="input__title">
                        Размер <span>см</span>
                    </div>
                    <div className="collection">
                        <button className='btn-filter button'>23</button>
                        <button className='btn-filter button'>24</button>
                        <button className='btn-filter button'>25</button>
                        <button className='btn-filter button'>26</button>
                        <button className='btn-filter button'>27</button>
                    </div>
                </div>

            </div>
            <div className="filter_btn_choose">
                <button>Применить</button>
            </div>
        </div>
    );
};

export default InputFilter;