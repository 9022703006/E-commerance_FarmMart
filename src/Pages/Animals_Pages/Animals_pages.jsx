import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../../Compounts/Navbar/Navbar';
import Animals from '../Home_Pages/View_animals/Animals';
import Footer from '../../Compounts/Footer/Footer';

import Animals_display from '../../Animals_display/Animals_display';
import Categories from '../Home_Pages/categories/Categories';

const Animals_pages = () => {
    // Theme state management with localStorage persistence
       const current_thems = localStorage.getItem('current_thems'); // After refresh, it will show light mode
       const [theme, upadtethem] = useState(current_thems ? current_thems : 'light'); // Default to 'light' 
       // Update theme in localStorage whenever theme state changes
       useEffect(() => {
         localStorage.setItem('current_thems', theme);
       }, [theme]);
        const[select_categories,update_categories]=useState("All");
  return (
    <div>
         <div className={`container ${theme}`}>
            <Navbar theme={theme} upadtethem={upadtethem}/>
            <Animals select_categories={select_categories} />
            <Footer/>
         </div>
    </div>
  )
}

export default Animals_pages