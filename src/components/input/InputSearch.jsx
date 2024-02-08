import React from 'react';
import './inputSearch.css'

const InputSearch = () => {    
    return (
        <div className='search__container'>
            <input type="text" className='search__input' placeholder='Поиск'/>
        </div> 
    );
};

export default InputSearch;