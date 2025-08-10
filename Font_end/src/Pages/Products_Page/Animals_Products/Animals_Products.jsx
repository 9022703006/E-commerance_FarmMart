import React, { useContext } from 'react'
import Navbar from '../../../Compounts/Navbar/Navbar';
import { useState, useEffect } from 'react';
import './Animals_Products.css'
import { Form } from "react-bootstrap";
import Slider from "@mui/material/Slider";
import { catego, Products_info } from '../../../Array_Data/Categ';
import Footer from '../../../Compounts/Footer/Footer';
import { Store_context } from '../../../Context_Provider/Store_context';
import Login_pop from '../../login/Login_pop';
import Add_to_card from '../../Add_to_card_pages/Add_to_card';
import axios from 'axios';


const Animals_Products = () => {

    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const current_thems = localStorage.getItem('current_thems'); // After refresh, it will show light mode
    const [theme, upadtethem] = useState(current_thems ? current_thems : 'light'); // Default to 'light' 
    // Update theme in localStorage whenever theme state changes

    useEffect(() => {
        localStorage.setItem('current_thems', theme);
    }, [theme]);

    const [showLogin, setshowlogin] = useState(false);

    const [showCard, setCard] = useState(false);

    return (
        <>
            {showLogin ? <Login_pop setshowlogin={setshowlogin} /> : <></>}
            {showCard ? <Add_to_card setCard={setCard} /> : <></>}


            <div className={`container ${theme}`}>
                <Navbar theme={theme} upadtethem={upadtethem} setshowlogin={setshowlogin} setCard={setCard} />
                <>
                    <div className="container101">
                        <div className='item'>
                            <div>
                                <div className="filter-sidebar p-2 border ">
                                    <h1>advertisement</h1>
                                  
                                </div>
                            </div>
                        </div>
                        {/* Products diplay  */}
                        <div className='container_flex '>
                            <Product_display />
                        </div>

                    </div>
                </>
                <Footer />
            </div >
        </>
    )
}


{/* This is code about Products Dispaly.......*/ }


function Product_display() {
   
    const { cartItems, addToCart, removeFromCart,Products_info,url } = useContext(Store_context);
    return (
        <>
            {(Products_info.map((values, index) => {
                return (
                    <div class="property-card" key={index}>
                        <a href="#">
                            <div
                                className="property-image"
                                style={{
                                    backgroundImage: `url(${url}/uploads/${values.images})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "100%",
                                    width: "100%"
                                
                                }}
                            >
                                <div className='order'>
                                    <div>
                                        {!cartItems[values._id] ? (
                                            <button onClick={() => addToCart(values._id)}>Add to card</button>
                                            
                                        ) : (
                                            <>
                                                <button onClick={() => removeFromCart(values._id)}>-</button>
                                                <span>{cartItems[values._id]}</span>

                                                <button onClick={() => addToCart(values._id)}>+</button>
                                            </>

                                        )}
                                    </div>
                                  
                                </div>
                            </div>
                            <div>

                            </div>
                        </a>
                        <div className="property-description">
                            <h5 style={{ color: '#05ff00' }}>{values.category}</h5>
                            <p className='p1' >Product: {values.name}</p>
                            <div className="price-kg">
                                <spam>KG: {values.description}</spam>
                                <spam className='' style={{ justifyContent: 'center' }}>Price: {values.price}</spam>
                            </div>
                            <h3 style={{marginLeft:'2%'}}>Farm_Mart</h3>
                        </div>
                        <a href="#">
                            <div className="property-social-icons"></div>
                        </a>
                    </div>
                )
            }))}
        </>
    )

}



export default Animals_Products