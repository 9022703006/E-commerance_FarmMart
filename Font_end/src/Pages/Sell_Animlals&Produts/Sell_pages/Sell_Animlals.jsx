import React from 'react'
import Navbar from '../../../Compounts/Navbar/Navbar'
import { useState, useEffect, useRef } from 'react';
import './Sell_Animlals.css'
import img1 from '../../../assets/Cow.jpg';
import { Animals_sell_pages, catego, heading_Animlas } from '../../../Array_Data/Categ';
import { IconContext } from 'react-icons';
import Footer from '../../../Compounts/Footer/Footer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Login_pop from '../../login/Login_pop';
import Add_to_card from '../../Add_to_card_pages/Add_to_card';

const Sell_Animlals = () => {
    const current_thems = localStorage.getItem('current_thems'); // After refresh, it will show light mode
    const [theme, upadtethem] = useState(current_thems ? current_thems : 'light'); // Default to 'light' 
    // Update theme in localStorage whenever theme state changes
    useEffect(() => {
        localStorage.setItem('current_thems', theme);
    }, [theme]);


    // this useState is about how to show the onclick Funcation 
    const [Heading_Category, update_Heading_Category] = useState(null);

     const [showLogin,setshowlogin]= useState(false);
         
         const[showCard,setCard] = useState(false);
         


    return (
        <div className={`container ${theme}`}>
             {showLogin?<Login_pop setshowlogin={setshowlogin}/>:<></>} 
            {showCard?<Add_to_card setCard={setCard}/>:<></>}
               <Navbar theme={theme} upadtethem={upadtethem} setshowlogin={setshowlogin} setCard={setCard}/>
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
    const [images, update_images] = useState(false);

  const [data, setdata] = useState({ //form data is stored in usestate but same name should be there
    name: '',
    description: '',
    price: '',
    category: ''
  })

  const onChangeHander = (event) => { // gives values
    const name = event.target.name;
    const value = event.target.value;
    setdata(data => ({ ...data, [name]: value }))
  }

  useEffect(() => { // for test is working or not
    console.log(data);
  }, [data])

  const url = "http://localhost:4000";

 const onsubmitHander = async (event) => {
  event.preventDefault();

  if (!images) {
    toast.error("Please upload an image before submitting.");
    return;
  }

  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("price", Number(data.price));
  formData.append("category", data.category);
  formData.append("images", images);

  

  try {
    const response = await axios.post(`${url}/api/animals/add`, formData);
    console.log(response.data);

    if (response.data.success) {
      toast.success("Products Added Successfully...");
      setdata({ name: '', description: '', price: '', category: '' });
      update_images(false);
    } else {
      toast.error("Upload failed: " + (response.data.message || "Unknown error"));
    }
  } catch (err) {
    console.error("Error posting data", err);
    toast.error("Error submitting form. Check console for more details.");
  
  }
};
    return (
        <div>
            <h1> Products_Pages</h1>
            <h3>What Would You Like to Sell Today?</h3>
            <div className='data'>
                <form onSubmit={onsubmitHander}>
                    <div className="add-img-upload flex-col " >
                <label htmlFor="images">
              {images && <img src={URL.createObjectURL(images)} alt="Preview" width="300" style={{margin:'0 ,auto'}} />}
              <p>Upload the images</p>
            </label>
            <input
              onChange={(e) => update_images(e.target.files[0])}
              type="file"
              id="images"
              hidden
              accept="image/*"
            />
          </div>
                 <input  type='text' name="name" placeholder='Enter a products name:' onChange={onChangeHander} value={data.name}></input>
                 <input type='text' name="description" placeholder='Enter a products weight:'onChange={onChangeHander} value={data.description}></input>
                 <select onChange={onChangeHander} name='category' value={data.category} style={{width:'53%'}}>
                <option value="">Select Category</option>
                <option value="Cow">Cow</option>
                <option value="Boffule">Boffule</option>
                <option value="Pig">Pig</option>
                <option value="Horse">Horse</option>
                <option value="Sheep">Sheep</option>
              </select>
                 <input type='text' name="price" placeholder='Enter a products price:'onChange={onChangeHander} value={data.price}></input>
                 <button type='submit'>Submit</button>
                 </form>

            </div>
           
        </div>
    )
}

export default Sell_Animlals