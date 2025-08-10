import React, { useContext } from 'react'
import './Add_to_card.css'
import { Store_context } from '../../Context_Provider/Store_context'
import { Products_info } from '../../Array_Data/Categ';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Add_to_card = ({ setCard }) => {
    const { cartItems, removeFromCart, addToCart, Products_info } = useContext(Store_context);
    return (
        <div className='login-popup'>
            <div className="login-popup-container">

                <div className="login-popup-title">
                    <h2>Cart Items</h2>
                    <button onClick={() => setCard(false)} className="close-btn">×</button>
                </div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Farm_mart</th>
                            <th scope="col">Animal</th>
                            <th scope="col">Product</th>
                            <th scope="col">price</th>
                            <th scope='col'>Add</th>
                            <th scope='col' >price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {Products_info?.length > 0 && Object.values(cartItems).some((count) => count > 0) ? (
                        Products_info.map((values, index) => {
                            if (cartItems[values._id]) {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>Farm_mart</td>
                                            <td>{values.category}</td>
                                            <td>{values.name}</td>
                                            <td>₹{values.price}</td>
                                            <td>
                                                <div className='count'>
                                                    {!cartItems[values._id] ? (
                                                        <p onClick={() => addToCart(values._id)} style={{ cursor: 'pointer' }}>+</p>
                                                    ) : (
                                                        <>
                                                            <p onClick={() => removeFromCart(values._id)} style={{ cursor: 'pointer' }}>-</p>
                                                            <span>{cartItems[values._id]}</span>
                                                            <p onClick={() => addToCart(values._id)} style={{ cursor: 'pointer' }}>+</p>
                                                        </>
                                                    )}
                                                </div>
                                            </td>

                                            <td>
                                                <p>{values.price * cartItems[values._id]}</p>
                                            </td>
                                            <td>
                                                <button className="remove-btn" style={{ width: "90%" }} onClick={() => removeFromCart(values._id)}>Remove</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                                
                              
                            }
                             
                        })
                    ) : (
                        <>
                            <div className="empty-cart">
                                <h2>Your cart is empty.</h2>
                            </div>
                        </>
                    )}

                </table>
                    <Total_bill/>

            </div>
        </div>

    )
}

function Total_bill() {
    const { Total_card_amount } = useContext(Store_context);
    return (
        <div className='total_bill'>
            <h3>Summary</h3>
            <h4>Subtotal: {Total_card_amount()}</h4>
            <h4 style={{ width: "150%" }}>Shipping: Rs 20</h4>
            <h4>Total: {Total_card_amount() + 20}</h4>
            <div>
                <button style={{ width: "90%" }} ><Link to="/Check_out_card">PROCEED TO CHECKOUT</Link></button>
            </div>
        </div>

    )
}

export default Add_to_card
