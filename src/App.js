import React from 'react';
import './App.css'
import ItemsSneakers from './items/sneaker/ItemsSneakers';
import ItemsClothes from './items/clothes/ItemsClothes';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './components/routes/AppRoutes';
import Profile from './components/profile/Profile';
import InputFilter from './components/input/InputFilter';
import Product from './items/product/Product';


function App () {

    return (
      <div className="App">
          <Routes>
        
            <Route path='/' element={<AppRoutes/>}>
              <Route index element={<ItemsSneakers/>}/>
              <Route path='clothes' element={<ItemsClothes />}/>

            </Route>


            <Route path='profile' element={<Profile/>}/>
          <Route path='filter' element={<InputFilter/>}/>
          <Route path='product/:id' element={<Product/>}/>
          </Routes>
      </div>
    );
}

export default App;
