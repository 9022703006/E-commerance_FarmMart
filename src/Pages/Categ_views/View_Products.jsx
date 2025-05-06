import React, { useEffect } from 'react'
import Navbar from '../../Compounts/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import './View_Products.css'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import { menu_deatils } from '../../Array_Data/Categ';
import Footer from '../../Compounts/Footer/Footer';
import { Icons } from 'react-toastify';
import { IconContext, icons } from 'react-icons';

const View_Products = () => {
  let use_Loaction = useLocation();
  let current_id = use_Loaction.pathname.split('/')[2];
  let current_data = menu_deatils.filter((v) => v.id == current_id);

  {/**Theme each and every page  */ }
  const current_thems = localStorage.getItem('current_thems'); // After refresh, it will show light mode
  const [theme, upadtethem] = useState(current_thems ? current_thems : 'light'); // Default to 'light' 
  // Update theme in localStorage whenever theme state changes
  useEffect(() => {
    localStorage.setItem('current_thems', theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <>
        {current_data.length > 0 ? (
          current_data.map((values, index) => (
            <>
              <Navbar theme={theme} upadtethem={upadtethem} />

              <h1 className='heading'>COW_MART</h1>
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <img
                    className="img_height" id='img1'
                    src={values.img}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img_height" id='img1'
                    src={img2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img_height" id='img1'
                    src={img3}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <div className='container1'>
                <div class="item">
                  <h1>Ower_name: {values.owner_name}</h1>
                  <h2>{values.title} Breed: {values.Breed}</h2>
                </div>
                <div class="item">
                  <h1>Google map</h1>
                </div>
                <div class="item">
                  <div className='flex_1'>
                    <div>
                      <h1><IconContext.Provider value={{ color: "blue" }}>
                        <i class="fa fa-user" aria-hidden="true"></i>
                      </IconContext.Provider>Owner_name</h1>
                      <p className='text_center'>{values.owner_name}</p>
                    </div>
                    <div>
                      <h1><IconContext.Provider>
                        <i class=" fa fa-location-arrow" aria-hidden="true"></i>
                      </IconContext.Provider>
                        State</h1>
                      <p className='text_center'>Maharathra</p>
                    </div>
                    <div>
                      <h1>
                        <IconContext.Provider>
                          <i class="fa fa-address-book" aria-hidden="true"></i>
                        </IconContext.Provider>
                        Location</h1>
                      <p className='text_center'>Kavathepairn,Sangil</p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <h1>Description:</h1>
                  {(values.title == 'Cow' ?
                    <div className='text_margin'>
                      <p>Types: {values.Breed}</p>
                      <p>Ear_Tag_ID: {values.Ear_Tag_ID}</p>
                      <p>Breed: {values.Breed}</p>
                      <p>Age: {values.Age}</p>
                      <p> Gender: {values.Gender}</p>
                      <p>Color: {values.Color}</p>
                      <p> Milk_Production: {values.Milk_Production}</p>
                      <p>Vaccinated: {values.Vaccinated}</p>
                      <p>Pregnancy_Status: {values.Pregnancy_Status}</p>
                      <p> Medical_History: {values.Medical_History}</p>
                      <p>Transportation_Facility_Available: {values.Transportation_Facility_Available}</p>
                      <p>Exchange: {values.Exchange}</p>
                    </div>
                    :
                    <>
                    </>)}


                </div>

              </div>
            </>

          ))) : (
          <div>
            <p>No data available....</p>
          </div>
        )}
        <Footer />
      </>
    </div>
  )
}

export default View_Products