import React, { useEffect, useState } from 'react'
import Navbar from '../../Compounts/Navbar/Navbar';
import Login_pop from '../login/Login_pop';
import Add_to_card from '../Add_to_card_pages/Add_to_card';
import './About_us.css'
import Footer from '../../Compounts/Footer/Footer';

const About_us = () => {
    // Theme state management with localStorage
    const current_thems = localStorage.getItem('current_thems'); // After refresh, it will show light mode
    const [theme, upadtethem] = useState(current_thems ? current_thems : 'light'); // Default to 'light' 
    // Update theme in localStorage whenever theme state changes
    useEffect(() => {
        localStorage.setItem('current_thems', theme);
    }, [theme]);
    const [showLogin, setshowlogin] = useState(false);

    const [showCard, setCard] = useState(false);

    return (
        <div className={`container ${theme}`}>
            {showLogin ? <Login_pop setshowlogin={setshowlogin} /> : <></>}
            {showCard ? <Add_to_card setCard={setCard} /> : <></>}
            <Navbar theme={theme} upadtethem={upadtethem} setshowlogin={setshowlogin} setCard={setCard} />
            <div className='container12'>
                <div>
                    <h1>About Us</h1>
                    <h3>Welcome to Farm-Mart — your trusted partner in the agricultural marketplace:</h3>
                    <p>At Farm-Mart, our mission is simple yet impactful:</p>
                    <p>to connect buyers and sellers within the agricultural community, uphold ethical practices, and ensure the highest standards of animal welfare.</p>
                    <p>We’re dedicated to supporting local farmers and promoting sustainable farming. By making it easier to buy and sell quality livestock and farm products, we help strengthen rural economies and build a healthier, more transparent agricultural ecosystem.</p>
                </div>
                <div>
                    <h2>What We Offer:</h2>
                    <h3>✅ Animal Buying and Selling:</h3>
                    <p>Easily browse, buy, or list livestock. We ensure transparency by featuring detailed animal profiles, including photos and the owner’s contact details, so you know exactly where your animals come from.</p>
                    <h3>✅ Quality Products for Farm Operations:</h3>
                    <p>From feeds to tools and equipment, we connect you with trusted suppliers to keep your farm running smoothly.</p>
                    <h3>✅ Photos & Owner Address for Animals:</h3>
                    <p>View comprehensive listings with clear photographs and verified owner addresses to ensure confidence in every transaction.</p>
                    <h3>✅ Agricultural Technology Integration:</h3>
                    <p>We bring modern tech solutions to traditional farming, helping you manage records, track animal health, and stay ahead with smart farming tools.</p>
                    <h3>✅ Expert Guidance and Support</h3>
                    <p>Our team is always ready to offer insights and support, whether you’re a seasoned farmer or just getting started.</p>
                </div>
                <div>
                    <h4>Join us at Farm-Mart and be part of a community that values quality, fairness, and the future of farming.

                        If you’d like, I can also prepare a shorter tagline-style version, or a “Why Choose Us” section. Let me know!</h4>
                </div>
            </div>
        <Footer/>

        </div>
    )
}

export default About_us
