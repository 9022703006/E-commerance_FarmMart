import { createContext, useEffect } from "react";
import React from "react";
import { menu_deatils, Products_info } from "../Array_Data/Categ"; // Removed `catego` since it's not used
import { useState } from "react";
import axios from 'axios'

// Step-1: Create Context
export const Store_context = createContext(null);


const Store_context_provider = (props) => {
  const [cartItems, updateCart] = useState({});
  const url = 'http://localhost:4000' // and declared into contextValue
  const [token,settoken]= useState("");// to save the token of password


   const[Products_info,setProducts]=useState([])

  //this code is card page i'ts increases time: 1:32:59 sec
  // Add item to cart

  /*const addToCart = (itemId)=>{
    if(!cartItems[itemId]){
      updateCart((prev)=>({...prev,[itemId]:1}))
    }
    else{
        updateCart((prev)=>({...prev,[itemId]:prev[itemId]+1}))

    }
  }*/
  const addToCart = async (itemId) => {
    updateCart((prev) => (
      {
       ...prev,[itemId]: prev[itemId] ? prev[itemId] + 1 : 1, // Increment or initialize
    }));
    // after login add to card we can save in databases
    if(token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}}) 
    }
  };

    // Remove item from cart
  const removeFromCart = async (itemId) => {
    updateCart((prev) => {
      if (!prev[itemId]) return prev; // Item doesn't exist in the cart
      const newCart = { ...prev };
      newCart[itemId] -= 1;
      if (newCart[itemId] <= 0) delete newCart[itemId]; // Remove if count is 0
      return newCart;
    });
     if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}}) 
    }
  };

  //when the pages is refresh data will be save
  const loadcarddata = async (token)=>{
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    // cardData is present in Cart_controller.js in bankend
    updateCart(response.data.cardData); // data will save in carditem usestate
  }


  // Total amount of all products that order by customer 
const Total_card_amount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      const item_info = Products_info.find(
        (product) => product._id === item
      );
      if (item_info) {
        totalAmount += item_info.price * cartItems[item];
      } else {
        console.warn(`Product not found for id: ${item}`);
      }
    }
  }
  return totalAmount;
};



//Fetch Products list all the products list
 const Fetchproducts = async ()=>{
    const response = await axios.get(url+"/api/animals/list")
   setProducts(response.data.data)
  }

  useEffect(()=>{
    async function loadData() {
      await Fetchproducts();
      // funcation of loadcartdata
      if(localStorage.getItem("token")){
        await loadcarddata(localStorage.getItem("token"))
      }
    }
    loadData();
  },[])


// Define context value
  const contextValue = {
    Products_info,
    addToCart,
    cartItems,
    updateCart,
    removeFromCart,
    Total_card_amount,
    url,
    token,
    settoken
  }
  return (
    <Store_context.Provider value={contextValue}>
      {props.children}
    </Store_context.Provider>
  );
};

export default Store_context_provider;
