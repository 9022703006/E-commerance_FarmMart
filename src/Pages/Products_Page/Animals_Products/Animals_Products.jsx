import React from 'react'
import Navbar from '../../../Compounts/Navbar/Navbar';
import { useState, useEffect } from 'react';
import './Animals_Products.css'
import { Form } from "react-bootstrap";
import Slider from "@mui/material/Slider";
import { catego, Products_info } from '../../../Array_Data/Categ';
import Footer from '../../../Compounts/Footer/Footer';

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

    return (
        <div className={`container ${theme}`}>
            <Navbar theme={theme} upadtethem={upadtethem} />
            <>
                <div className="container101">
                    <div className='item'>
                        <div>
                            <div className="filter-sidebar p-2 border ">
                                <h5 className="fw-bold">Filtrs</h5>
                                <h6 className="fw-bold">CATEGORIES</h6>
                                {/* Categories Section */}
                                {Products_info.map((values, index) => {
                                    return (
                                        <div className="categories mt-3">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <strong
                                                        className="d-flex align-items-center"
                                                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                                        style={{ cursor: "pointer" }}>
                                                        {values.animal}
                                                        <span className="ms-2">
                                                            {isCategoryOpen ? "▼" : "▶"} {/* Toggle Icon */}
                                                        </span>
                                                    </strong>
                                                </li>
                                                {isCategoryOpen && (
                                                    <ul className="ps-3">
                                                        <li>{values.feed}</li>
                                                        <li>Mobiles</li>
                                                        <li>Tablets</li>
                                                        <li>Mobile Accessories</li>
                                                        <li>Tablet Accessories</li>
                                                    </ul>
                                                )}
                                            </ul>
                                        </div>

                                    )
                                })}
                                {/* Price Filter Section */}
                                <div className="price-filter mt-4">
                                    <h6 className="fw-bold">PRICE</h6>
                                    <Slider
                                        value={priceRange}
                                        onChange={handlePriceChange}
                                        min={0}
                                        max={10000}
                                        step={100}
                                        valueLabelDisplay="auto"
                                    />
                                    <div className="d-flex justify-content-between mt-2">
                                        <Form.Select value={priceRange[0]}>
                                            <option>Min</option>
                                            <option value="1000">₹1000</option>
                                            <option value="5000">₹5000</option>
                                        </Form.Select>
                                        <span>to</span>
                                        <Form.Select value={priceRange[1]}>
                                            <option>₹10000+</option>
                                            <option value="5000">₹5000</option>
                                            <option value="10000">₹10000</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Products diplay  */}
                    <div className='container_flex '>
                        <Product_display/>   
                        </div>
                            
                </div>
        </>
        <Footer/>
        </div >
    )
}


{/* This is code about Products Dispaly.......*/}


function Product_display(){
    return(
        <>
            {(Products_info.map((values, index) => {
                            return (
                                        <div class="property-card">
                                            <a href="#">
                                                <div
                                                    className="property-image"
                                                    style={{
                                                        backgroundImage: `url(${values.img})`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "center",
                                                        height: "100%",
                                                        width: "100%"
                                                    }}
                                                >
                                                    <div className='order'>
                                                        <button className='bts12'>View</button>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="property-description">
                                                <h5 style={{color:'#05ff00'}}>{values.animal}</h5>
                                                <p>{values.Products_name}</p>
                                                <spam>KG: {values.Kg}</spam>
                                                <p className='' style={{justifyContent:'center'}}>Price: {values.Price}</p>
                                                <h4>FARM-MART</h4>
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