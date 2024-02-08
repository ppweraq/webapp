import React from 'react';
import './App.css'
import Header from './components/header/Header';
import ItemsSneakers from './items/sneaker/ItemsSneakers';
import ItemsClothes from './items/clothes/ItemsClothes';
import InputSearch from './components/input/InputSearch';
import Categories from './components/categories/Categories';
import InputFilter from './components/input/InputFilter';
import Profile from './components/profile/Profile';
import Product from './components/product/Product'


function App () {

    return (
      <div className="App">
        <Header/>
        <InputSearch/>
        <Categories/>
        <ItemsSneakers />

        <Header/>
        <InputSearch/>
        <Categories/>
        <ItemsClothes />

        <InputFilter/>

        <Profile/>

        <Product />
      </div>
    );
}

export default App;
