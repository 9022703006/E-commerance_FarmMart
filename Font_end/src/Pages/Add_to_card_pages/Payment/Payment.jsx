import React from 'react'
import { useState } from 'react';
import Navbar from '../../../Compounts/Navbar/Navbar';
import Login_pop from '../../login/Login_pop';
import Add_to_card from '../Add_to_card';
import { useEffect } from 'react';

const Payment = () => {
    const [activeTab, setActiveTab] = useState('card');

    const current_thems = localStorage.getItem('current_thems'); // After refresh, it will show light mode
        const [theme, upadtethem] = useState(current_thems ? current_thems : 'light'); // Default to 'light' 
        // Update theme in localStorage whenever theme state changes
    
        useEffect(() => {
            localStorage.setItem('current_thems', theme);
        }, [theme]);
        const [showLogin, setshowlogin] = useState(false);
       const [showCard, setCard] = useState(false);
        
    return (
        <div>
             {showLogin ? <Login_pop setshowlogin={setshowlogin} /> : <></>}
             {showCard ? <Add_to_card setCard={setCard} /> : <></>}
            
             <Navbar theme={theme} upadtethem={upadtethem} setshowlogin={setshowlogin} setCard={setCard} />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-7 mx-auto">
                        <div className="bg-white rounded-lg shadow-sm p-5">
                            {/* Nav Pills */}
                            <ul className="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                                <li className="nav-item">
                                    <button
                                        onClick={() => setActiveTab('card')}
                                        className={`nav-link rounded-pill ${activeTab === 'card' ? 'active' : ''}`}
                                    >
                                        <i className="fa fa-credit-card"></i> Credit Card
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        onClick={() => setActiveTab('paypal')}
                                        className={`nav-link rounded-pill ${activeTab === 'paypal' ? 'active' : ''}`}
                                    >
                                        <i className="fa fa-paypal"></i> Paypal
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        onClick={() => setActiveTab('bank')}
                                        className={`nav-link rounded-pill ${activeTab === 'bank' ? 'active' : ''}`}
                                    >
                                        <i className="fa fa-university"></i> Bank Transfer
                                    </button>
                                </li>
                            </ul>

                            {/* Tab Content */}
                            <div className="tab-content">
                                {/* Credit Card Tab */}
                                {activeTab === 'card' && (
                                    <div className="tab-pane show active">
                                        
                                        <form>
                                            <div className="form-group">
                                                <label>Full name (on the card)</label>
                                                <input type="text" placeholder="Jeff Doe" required className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label>Card number</label>
                                                <div className="input-group">
                                                    <input type="text" placeholder="Your card number" className="form-control" required />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text text-muted">
                                                            <i className="fa fa-cc-visa mx-1"></i>
                                                            <i className="fa fa-cc-amex mx-1"></i>
                                                            <i className="fa fa-cc-mastercard mx-1"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <div className="form-group">
                                                        <label>Expiration</label>
                                                        <div className="input-group">
                                                            <input type="number" placeholder="MM" className="form-control" required />
                                                            <input type="number" placeholder="YY" className="form-control" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group mb-4">
                                                        <label title="Three-digits code on the back of your card">
                                                            CVV <i className="fa fa-question-circle"></i>
                                                        </label>
                                                        <input type="text" required className="form-control" />
                                                    </div>
                                                </div>
                                            </div>

                                            <button type="submit" className="subscribe btn btn-primary btn-block rounded-pill shadow-sm">
                                                Confirm
                                            </button>
                                        </form>
                                    </div>
                                )}

                                {/* Paypal Tab */}
                                {activeTab === 'paypal' && (
                                    <div className="tab-pane fade show active">
                                        <p>Paypal is easiest way to pay online</p>
                                        <p>
                                            <button type="button" className="btn btn-primary rounded-pill">
                                                <i className="fa fa-paypal mr-2"></i> Log into my Paypal
                                            </button>
                                        </p>
                                        <p className="text-muted">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </p>
                                    </div>
                                )}

                                {/* Bank Transfer Tab */}
                                {activeTab === 'bank' && (
                                    <div className="tab-pane fade show active">
                                        <h6>Bank account details</h6>
                                        <dl>
                                            <dt>Bank</dt>
                                            <dd>THE WORLD BANK</dd>
                                        </dl>
                                        <dl>
                                            <dt>Account number</dt>
                                            <dd>7775877975</dd>
                                        </dl>
                                        <dl>
                                            <dt>IBAN</dt>
                                            <dd>CZ7775877975656</dd>
                                        </dl>
                                        <p className="text-muted">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </p>
                                    </div>
                                )}
                            </div>
                            {/* End Tab Content */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
