import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../../Compounts/Navbar/Navbar'
import Login_pop from '../../login/Login_pop';
import Add_to_card from '../Add_to_card';
import './Checkout_card.css'
import { Store_context } from '../../../Context_Provider/Store_context';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Checkout_card = () => {
    const current_thems = localStorage.getItem('current_thems'); // After refresh, it will show light mode
    const [theme, upadtethem] = useState(current_thems ? current_thems : 'light'); // Default to 'light'

    useEffect(() => {
        localStorage.setItem('current_thems', theme);
    }, [theme]);

    //for login state
    const [showLogin, setshowlogin] = useState(false);

    const [showCard, setCard] = useState(false);

        const {Total_card_amount,addToCart, Products_info ,token,url,cartItems} = useContext(Store_context);

        const [data,setdata]= useState({
            firstName:'',
            lastName:"",
            email:"",
            street:"",
            city:"",
            state:"",
            zipcode:"",
            country:"",
            phone:""
        })

        // data will be save in the setdata
        const OnchagesHandler=(event)=>{
            const name = event.target.name;
            const value = event.target.value;
            //...data means pervious data ,[name]:values means new data
            setdata(data=>({...data,[name]:value}))
        }

        const placeorder = async (event) => {
        event.preventDefault();// reload the webpages

        let orderItems = [];
        Products_info.map((item) => {
        if (cartItems[item._id] > 0) {
            let itemInfo = item;
            itemInfo['quantity']= cartItems[item._id] // safer to copy
            orderItems.push(itemInfo);
        }
    });

    let orderdata = {
        address: data,
        items: orderItems,
        amount: Total_card_amount() + 2,
    };

   try {
  let response = await axios.post(url + "/api/order/place", orderdata, {headers: { token }});

  console.log("Backend response:", response.data); // ADD THIS

  if (response.data.success) {
    const { session_url } = response.data;
    window.location.replace(session_url);
  } else {
    console.error("Error from backend:", response.data); // ADD THIS TOO
    alert("Order placement failed. Please try again.");
  }
} catch (error) {
  console.error("Axios error:", error.response?.data || error.message);
  alert("Server error while placing order.");
}
        }
        useEffect(()=>{
            console.log("data is found..",data)
            console.log(data)

        },[data])
    return (
        <>
            {showLogin ? <Login_pop setshowlogin={setshowlogin} /> : <></>}
            {showCard ? <Add_to_card setCard={setCard} /> : <></>}
            <div className={`container ${theme}`}>
                <Navbar theme={theme} upadtethem={upadtethem} setshowlogin={setshowlogin} setCard={setCard} />
                <form onSubmit={placeorder}>
                <div class="grid-container-element">
                    <div class="grid-child-element purple">
                        <h1>Delivery Information</h1>
                        <div className='first-last_name'>
                            <input type="text" placeholder='First Name' name='firstName' onChange={OnchagesHandler} value={data.firstName}></input>
                            <input type='text' placeholder='Last Name' name="lastName" onChange={OnchagesHandler} value={data.lastName}></input>
                        </div>
                        <div className='email-address'>
                            <input type="email" placeholder='Address' name='email' onChange={OnchagesHandler} value={data.email} ></input>
                        </div>
                        <div className='Street-address'>
                            <input type="text" placeholder='Street' name='street' onChange={OnchagesHandler} value={data.street} ></input>
                        </div>
                         <div className='city-state'>
                            <input type="text" placeholder='City' name="city" onChange={OnchagesHandler} value={data.city} ></input>
                            <input type='text' placeholder='State' name="state"  onChange={OnchagesHandler} value={data.state} ></input>
                        </div>
                        <div className='pin-country'>
                            <input type="text" placeholder='Pin code' name="zipcode" onChange={OnchagesHandler} value={data.zipcode} ></input>
                            <input type='text' placeholder='Country' name="country"  onChange={OnchagesHandler} value={data.country} ></input>
                        </div>
                         <div className='phone-number'>
                            <input type='number' placeholder='Phone number'  name='phone' onChange={OnchagesHandler} value={data.phone} ></input>
                        </div>
                        <div>
                        <button type="submit"  onClick={placeorder}>PROCESS</button>
                    </div>
                    </div>
                    <div class="grid-child-element green">
                        <h1>Cart Total :</h1>
                        <Total_bill/>
                    </div>
                </div>
                </form>
            </div>
        </>
    )
}


function Total_bill() {
    const { Total_card_amount } = useContext(Store_context);
    return (
        <div className='total_bill'>
          <h1>Summary:</h1>
             <h1>Subtotal: {Total_card_amount()}</h1>
            <h1>Shipping:Rs 20</h1>
            <h1>Total: {Total_card_amount() + 20}</h1>
            <div className="total-bill">
             <button  style={{ width: "90%" }} ><Link to={"/Payment_pages"}>PROCEED TO PAYMENT</Link></button>  
            </div>
        </div>

    )
}


export default Checkout_card
