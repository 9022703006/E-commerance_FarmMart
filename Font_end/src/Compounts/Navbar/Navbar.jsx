import React, { useContext, useState } from 'react'
import './Navbar.css'
import search_white from '../../assets/search-w.png';
import logo_white from "../../assets/logo-white.png";
import logo_black from "../../assets/logo-black.png";
import night_theme from "../../assets/night.png";
import day from "../../assets/day.png";
import search_icon from "../../assets/search-b.png";
import { Link } from 'react-router-dom';
import { faBagShopping, faBugs, faHome, faIdCard, faShop } from '@fortawesome/free-solid-svg-icons'
import { IconContext } from 'react-icons';
import { Store_context } from '../../Context_Provider/Store_context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Chartai from '../../Chart_ai/Chartai';


function Navbar({ theme, upadtethem, setshowlogin, setCard }) {

  const { Total_card_amount, token, settoken } = useContext(Store_context);

  const toggle_mode = () => {
    theme == 'light' ? upadtethem('dark') : upadtethem('light')
  }
  /*<img  src={theme=='light' ? logo_black : logo_white} alt='' className='logo'/>* above ul*/

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div>
      <div className='navbar'>
        <div>
            <Link to={'/'}><h2 className='heading'>FARM-MART</h2></Link>
        </div>
        <div className="dark">
          <div className="menu-toggle" onClick={toggleMenu}>
            ☰
          </div>
        </div>

        <ul className={`ul1 ${menuOpen ? 'show' : ''}`}>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/Animals_Products'}>Products</Link></li>
          <li><Link to={'/Animals_pages'}>LiveStock</Link></li>
          <li><Link to={'/About_us'}>About_us</Link></li>
        </ul>
        <div className='search'>
          <input type='text' placeholder='Find anything..' />
          <img src={theme == 'light' ? search_white : search_icon} alt='' className='icon1' />
        </div>
        <div className='day_nignt'>
          <img onClick={() => { toggle_mode() }} src={theme == 'light' ? night_theme : day} alt="" className='toggle_icon' />
          <i onClick={() => setshowlogin(true)} class="fa fa-user faa " style={{ fontSize: "35px" }} aria-hidden="true"></i>
          <FontAwesomeIcon ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faBagShopping} onClick={() => setCard(true)} className={Total_card_amount() === 0 ? "" : "dot_menu"} aria-hidden="true" style={{ fontSize: "35px", marginLeft: "25px" }}></FontAwesomeIcon>
        </div>
        <div>
               <button className='bts11'><Link to={'/Sell_Pages'}><p>SELL</p></Link></button>
        </div>
        <div>
           <button className='btsAi'><Link to={"/Ai_chat"}> <p>AI CHAT</p></Link></button>
        </div>
        </div>
        <div >
          
        <div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
