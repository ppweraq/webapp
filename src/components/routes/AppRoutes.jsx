import React from 'react';
import Header from '../header/Header';
import InputSearch from '../input/InputSearch';
import Categories from '../categories/Categories';
import { Outlet } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <>
        <Header />
        <InputSearch />
        <Categories />
        <Outlet/>
      </>
    );
};

export default AppRoutes;