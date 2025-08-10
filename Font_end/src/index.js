import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import reportWebVitals from "./reportWebVitals";
import Store_context_provider from "./Context_Provider/Store_context";
import View_Products from "./Pages/Categ_views/View_Products";
import Animals_Products from "./Pages/Products_Page/Animals_Products/Animals_Products";
import Sell_Animlals from "./Pages/Sell_Animlals&Produts/Sell_pages/Sell_Animlals";
import Animals_data from "./Pages/Sell_Animlals&Produts/Animals_input_data/Animals_data";
import Animals_pages from "./Pages/Animals_Pages/Animals_pages";
import Checkout_card from "./Pages/Add_to_card_pages/Checkout_card/Checkout_card";
import Payment from "./Pages/Add_to_card_pages/Payment/Payment";
import About_us from "./Pages/About_us/About_us";

const root = ReactDOM.createRoot(document.getElementById('root'));

let allrouter = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'View_Products/:id',
    element: <View_Products/>
  },
  {
    path:'Animals_Products',
    element:<Animals_Products/>
  },
  {
    path:'Sell_Pages',
    element:<Sell_Animlals/>

  },
  {
    path:'Animals_data/:Name',
    element:<Animals_data/>
  },
  {
    path:'Animals_pages',
    element:<Animals_pages/>
  },
  {
    path:'Check_out_card',
    element:<Checkout_card/>
  },
  {
    path:'Payment_pages',
    element:<Payment/>
  },
  {
    path:'About_us',
    element:<About_us/>

  }
])
root.render(
  // Step-3: Wrap App in Context Provider and Router
  <React.StrictMode>
    <Store_context_provider>
      <RouterProvider router={allrouter} />
    </Store_context_provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
