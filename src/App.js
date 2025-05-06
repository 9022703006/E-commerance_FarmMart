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

function App() {
   // Theme state management with localStorage persistence
   const current_thems = localStorage.getItem('current_thems'); // After refresh, it will show light mode
   const [theme, upadtethem] = useState(current_thems ? current_thems : 'light'); // Default to 'light' 
   // Update theme in localStorage whenever theme state changes
   useEffect(() => {
     localStorage.setItem('current_thems', theme);
   }, [theme]);
        
   const[select_categories,update_categories]=useState("All");
   

  return (
    <div className="App">
      <div className={`container ${theme}`}>
        <Navbar theme={theme} upadtethem={upadtethem}/>
        <Silder/>
        <Categories select_categories={select_categories} update_categories={update_categories}/>
        <Animals_display Categories={Categories}/>
        <Animals select_categories={select_categories} />
        <Footer/>
        
    </div>
    <div>
    </div>
    </div>
  );
}
export default App;
