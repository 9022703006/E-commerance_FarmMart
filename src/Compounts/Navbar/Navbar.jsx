import React from 'react'
import './Navbar.css'
import search_white from '../../assets/search-w.png';
import logo_white from "../../assets/logo-white.png";
import logo_black from "../../assets/logo-black.png";
import night_theme from "../../assets/night.png";
import day from "../../assets/day.png";
import search_icon from "../../assets/search-b.png";
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';


function Navbar({ theme, upadtethem }) {

  const toggle_mode = () => {
    theme == 'light' ? upadtethem('dark') : upadtethem('light')
  }
  /*<img  src={theme=='light' ? logo_black : logo_white} alt='' className='logo'/>* above ul*/
  return (
    <div>
      <div className='navbar'>
        <h2>FARM-MART</h2>
        <ul className='ul1'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/Animals_Products'}>Products</Link></li>

          <li><Link to={'/Animals_pages'}>Animals</Link></li>
          <li>About_us</li>
        </ul>
        <div className='search'>
          <input type='text' placeholder='Find anything..' />
          <img src={theme == 'light' ? search_white : search_icon} alt='' className='icon1' />
        </div>
        <div className='day_nignt'>
          <img onClick={() => { toggle_mode() }} src={theme == 'light' ? night_theme : day} alt="" className='toggle_icon' />
        </div>
        <div >
          <IconContext.Provider>

            <button className='bts11'><Link to={'/Sell_Pages'}>
              <i className="fa fa-plus" aria-hidden="true" style={{ marginRight: '8px' }}></i>
              SELL</Link></button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}
export default Navbar
