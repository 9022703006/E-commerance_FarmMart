import React, { useContext, useEffect, useState } from 'react'
import './Login_pop.css'
import { Store_context } from '../../Context_Provider/Store_context';
import axios from 'axios'

const Login_pop = ({setshowlogin}) => {
     const [curresate,setstate]= useState("Login");

     //step:1 where we store data of username,password, and eamil
        const[data,setdata]= useState(
            {
                name:'',
                email:'',
                password:''
            }
        )

    //step:2 now make arrow funcation which help take a data from input field and store in the useState:dada
    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setdata(data=>({...data,[name]:value}))// ...data means pervious data [name]:values will be update
    }
    //step 3: link the onChangeHandler with input field and gives name to input field 
    // to check test 
    /*useEffect(()=>{
        console.log(data);
    },[data])*/

    //step 4: open Store_context.jsx file and make declared url
    const {url,settoken} = useContext(Store_context);

    //step 5 : make login fn and onSubmit in tag form
    const onLogin = async (event)=>{
        event.preventDefault()// to stop page reload
        // to call api we need axois packages to support so, install:npm i axios
        let newurl =url;
        if(curresate==="Login"){
            newurl +="/api/user/login"
        }
        else
        {
            newurl +="/api/user/register"
        }
        const response = await axios.post(newurl,data);
       
        // step:6 make the useState in Store_context.jsx to save the token
        if(response.data.success){
            
            settoken(response.data.token);
            localStorage.setItem("token",response.data.token);// save the token in localStorage
            setshowlogin(false) // login pages will be hidden
        }
        else{
            alert(response.data.message)// when it will be false
        }
    }


    
     
  return (
    
    <div>
        <div className='login-popup'>
        <form onSubmit={onLogin}className="login-popup-container">
            <div className="login-popup-title">
                <h2>{curresate}</h2>
                <button className="cancle_button" onClick={()=>setshowlogin(false)}>x</button>
            </div>
            <div className="login-popup-input">
                {curresate==="Login"?<></> :
                <input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Enter a your name' required></input>
                }
                <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Enter a your Email' required></input>
                <input  name='password' onChange={onChangeHandler} value={data.password}  type = 'password' placeholder='Enter a your password' required></input>
            </div>
            <button style={{width:'100%'}} type='submit'>{setstate==="Sign up" ? "Create a account" :"Login"}</button>
            <div>
                <div className="login-popup-condition">
                    <input type='checkbox' required></input>
                    <p className='login_p'>Accept our Terms and Privacy Policy to continue.</p>
                </div>
                <div >
                    {curresate==="Login"
                ?<p className='login_p'>Create a new account? <span onClick={()=>setstate("Sign up")}>Click here</span></p>:
                <p className='login_p'>Already hava an account? <span onClick={()=>setstate("Login")}>Login here</span></p>
                }
                </div>
                </div> 
                  </form>
            </div>
        </div>
  )
}

export default Login_pop
 