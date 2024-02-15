import React from 'react';
import './inputSearch.css'

const InputSearch = () => {    
    return (
        <div className='search'>
            {/* <img src="./img/icons/loupe.png" alt="search" /> */}
            <input placeholder='Поиск' type="text"  className='search__input'/>
        </div> 
    );
};

export default InputSearch;