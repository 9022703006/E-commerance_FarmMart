import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Compounts/Header/Header';
import Slider from './Compounts/Silderbar/Slider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Profile/Profile';
import Add_animals from './Pages/Add_animlas/Add_animals';
import Add_products from './Pages/Add_Products/Add_products';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import View_Products from './Pages/View_Products/View_Products';


const App = () => {
  return (
    <div> 
      <ToastContainer/>
      <Header />
      <hr />
      <div className='app_context' style={{ display: 'flex' }}>
        <Slider />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/profile' element={<Profile/>}/>
            <Route path ='/add_animals' element={<Add_animals/>}/>
            <Route path= '/add_products' element={<Add_products/>}/>
            <Route path='/View_Products' element={<View_Products/>}/>

          </Routes>
        </div>
      </div>
 
  );
};

export default App;
