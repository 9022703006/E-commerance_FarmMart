import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../../Compounts/Navbar/Navbar';
import Animals from '../Home_Pages/View_animals/Animals';
import Footer from '../../Compounts/Footer/Footer';

import Animals_display from '../../Animals_display/Animals_display';
import Categories from '../Home_Pages/categories/Categories';
import Login_pop from '../login/Login_pop';
import Add_to_card from '../Add_to_card_pages/Add_to_card';

const Animals_pages = () => {
    // Theme state management with localStorage persistence
       const current_thems = localStorage.getItem('current_thems'); // After refresh, it will show light mode
       const [theme, upadtethem] = useState(current_thems ? current_thems : 'light'); // Default to 'light' 
       // Update theme in localStorage whenever theme state changes
       useEffect(() => {
         localStorage.setItem('current_thems', theme);
       }, [theme]);
        const[select_categories,update_categories]=useState("All");

         const [showLogin,setshowlogin]= useState(false);
             
             const[showCard,setCard] = useState(false);
             
  return (
    <div>
         <div className={`container ${theme}`}>
             {showLogin?<Login_pop setshowlogin={setshowlogin}/>:<></>} 
           {showCard?<Add_to_card setCard={setCard}/>:<></>}
            <Navbar theme={theme} upadtethem={upadtethem} setshowlogin={setshowlogin} setCard={setCard}/>
            <Animals select_categories={select_categories} />
            <Footer/>
         </div>
    </div>
  )
}

export default Animals_pages