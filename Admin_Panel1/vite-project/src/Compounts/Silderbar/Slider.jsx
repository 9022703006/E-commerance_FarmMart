import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickerMule } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faUser, faTruck, faList } from '@fortawesome/free-solid-svg-icons';
import './Silder.css';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const Slider = () => {
  const handleToast=()=>{
    toast.dark("View Products Pages...")
  }
  return (
    <div className='slider'>
      <div className='sidebar_option'>
        <NavLink 
          to='/profile' 
          className='silderbar-option1'
        >
          <FontAwesomeIcon icon={faUser} size='2x' />
          <p>Profile</p>
        </NavLink>

        <NavLink 
          to='/add_animals' 
          className= 'silderbar-option1 '
        >
          <FontAwesomeIcon icon={faStickerMule} size='2x' />
          <p>ADD Products</p>
        </NavLink>
        <NavLink to='/View_Products'
        className='silderbar-option1' onClick={handleToast}>
          <FontAwesomeIcon icon={faList} size='2x'/>
          <p>View Products</p>
          

        </NavLink>

        <NavLink 
          to='/add_products' 
          className='silderbar-option1'
        >
          <FontAwesomeIcon icon={faTruck} size='2x' />
          <p>ADD Animals</p>
        </NavLink>
      </div>
    </div>
  );
}


export default Slider;
