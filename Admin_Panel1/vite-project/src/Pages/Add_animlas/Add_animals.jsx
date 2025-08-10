import React, { useState, useEffect } from 'react'
import './Add_animals.css'
import axios from 'axios';
import { toast } from 'react-toastify';


const Add_animals = () => {
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
    <div className='border1' >
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

export default Add_animals
