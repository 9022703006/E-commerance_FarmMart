import React from 'react'
import Navbar from '../../../Compounts/Navbar/Navbar'
import { useState, useEffect, useRef } from 'react';
import './Sell_Animlals.css'
import img1 from '../../../assets/Cow.jpg';
import { Animals_sell_pages, catego, heading_Animlas } from '../../../Array_Data/Categ';
import { IconContext } from 'react-icons';
import Footer from '../../../Compounts/Footer/Footer';
import { Link } from 'react-router-dom';

const Sell_Animlals = () => {
    const current_thems = localStorage.getItem('current_thems'); // After refresh, it will show light mode
    const [theme, upadtethem] = useState(current_thems ? current_thems : 'light'); // Default to 'light' 
    // Update theme in localStorage whenever theme state changes
    useEffect(() => {
        localStorage.setItem('current_thems', theme);
    }, [theme]);


    // this useState is about how to show the onclick Funcation 
    const [Heading_Category, update_Heading_Category] = useState(null);


    return (
        <div className={`container ${theme}`}>
            <Navbar theme={theme} upadtethem={upadtethem} />
            <div className="Sell_area">

                {/* prev?.type — What's Going On?
                        This is checking what component type is currently stored in your state (Heading_Category). */}
                <div className="div1"><h1 className='h12' onClick={() => update_Heading_Category((prev => prev?.type == "" ? null : <Animals_Sell />
                ))}>Animals For Sale</h1></div>
                <div className="div2"><h1 className='h12' onClick={() => update_Heading_Category((prev => prev?.type == "" ? null : <Products_Sell />))}>Products For Sale</h1></div>
            </div>
            <div class="container_sell">
                <div class="sell_1">
                    <h3> Advertisement (ads)</h3>
                </div>
                <div class="sell_2">
                    {(Heading_Category === null ?
                        <>
                            <h1>Choose a Category to Start Selling</h1>
                            <h2>We offer two categories for selling:</h2>
                            <h3>1.Animals Sale :</h3>
                            <p> Post your animals for sale by filling out a simple form with all the necessary details.</p>
                            <h3>2.Products Sale :</h3>
                            <p> List related products (like feed, equipment, accessories, etc.) by completing a quick form</p>
                            <h3>Select the right category and start selling today!
                                <IconContext.Provider>
                                    <i class="fa fa-smile-o p-2" aria-hidden="true"></i>
                                </IconContext.Provider>
                            </h3>
                        </>

                        :
                        <>
                            {Heading_Category}
                        </>)}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

function Animals_Sell() {
    return (
        <div>
            <h3>Select your Animals:</h3>
            <div className='Grid_layout_1'>
                {Animals_sell_pages.map((values, index) => {
                    return (
                        <>
                            <div className='grid_column'  >
                                <div className='Border_lignt'>
                                    <div className='column' >
                                        <div className='wrapper'>
                                            <div className='card'
                                                style={{
                                                    backgroundImage: `url(${values.img})`,
                                                    backgroundSize: "cover",
                                                }}
                                            >
                                                <div className='info'>
                                                    <h1>{values.Name}</h1>
                                                    <p></p>
                                                    <button className='bst12'><Link to={`/Animals_data/${values.Name}`} >Fill The Form</Link></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )

}

function Products_Sell() {
    return (
        <div>
            <h1> Products_Pages....data</h1>
        </div>
    )
}

export default Sell_Animlals