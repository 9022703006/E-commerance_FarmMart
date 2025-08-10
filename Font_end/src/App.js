import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react'; // Import useState, useEffect, useRef
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../src/Compounts/Navbar/Navbar';
import Silder from './Pages/Home_Pages/Silder/Silder';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";  
import Footer from './Compounts/Footer/Footer';
import Categories from './Pages/Home_Pages/categories/Categories';
import Animals from './Pages/Home_Pages/View_animals/Animals';
import Animals_display from './Animals_display/Animals_display';
import { Link } from 'react-router-dom';
import Login_pop from './Pages/login/Login_pop';
import Add_to_card from './Pages/Add_to_card_pages/Add_to_card';
 import { ToastContainer, toast } from 'react-toastify';
import Payment from './Pages/Add_to_card_pages/Payment/Payment';

function App() {
   // Theme state management with localStorage
   const current_thems = localStorage.getItem('current_thems'); // After refresh, it will show light mode
   const [theme, upadtethem] = useState(current_thems ? current_thems : 'light'); // Default to 'light' 
   // Update theme in localStorage whenever theme state changes
   useEffect(() => {
     localStorage.setItem('current_thems', theme);
   }, [theme]);
        
   const[select_categories,update_categories]=useState("All");

   //for login state
   const [showLogin,setshowlogin]= useState(false);
   
   const[showCard,setCard] = useState(false);
   

  return (
    <>
    {showLogin?<Login_pop setshowlogin={setshowlogin}/>:<></>} 
    {showCard?<Add_to_card setCard={setCard}/>:<></>}
    <div className="App">
      <ToastContainer/>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} upadtethem={upadtethem} setshowlogin={setshowlogin} setCard={setCard}/>
        <Silder/>
        <Categories select_categories={select_categories} update_categories={update_categories}/>
        <Animals_display Categories={Categories}/>
        <Animals select_categories={select_categories} />
        <Footer/>
    </div>
    <div>
    </div>
    </div>
    </>
  );
}
export default App;
