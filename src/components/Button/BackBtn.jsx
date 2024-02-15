import React from 'react';
import { useNavigate } from 'react-router-dom';
import './backbtn.css'

const BackBtn = () => {
    const navigate = useNavigate()
    const arrowBack = () => navigate(-1)
    return (
        <>
    <button onClick={arrowBack} className='back__arrows'>
        <img src="./img/icons/back.png" alt="back" className='back__arrows' />
        Назад
    </button>  
        </>
    );
};

export default BackBtn;