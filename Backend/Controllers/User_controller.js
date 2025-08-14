import userModel from "../Models/User_models.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import vaildator from "validator";  
// in controller we build the logic...

//Login user
const login_user = async (req,res)=>{
    const {email,password}= req.body;
    try{
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false,message:'user not exists' })
        }

        const ismatch = await bcrypt.compare(password,user.password);

        if(!ismatch){
            return res.json({success:false,message:"Password is incoorect..."})
        }

        const token = createToken(user._id);
        res.json({success:true,token})
    }
catch(error){
    console.log(error);
    res.json({success:false,message:"Error"})

}
} 


// to create the token and open .env file for JWT_SECRET
const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

//register user
const register_user = async (req,res)=>{
    //data store in name,email,password
    const {name,email,password}= req.body;
    try{
        //checking is user already exists...
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"user already exits...."});
        }

        //vaildating email format and  Strong password more than 8
        if(!vaildator.isEmail(email)){
             return res.json({success:false,message:"please enter vaild email_id"});
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter a Stronger password"})
        }

        //hashing user passoword
        const salt = await bcrypt.genSalt(10); // if user enter more than 10 it will be Stronger passowrd..
        const hashed_password = await bcrypt.hash(password,salt);

        // new user 
        const new_user = new userModel({
            name:name,// name ,email and password will get form req.body right side
            email:email,// left side name ,email and password check from user_contollers.js in same name
            password:hashed_password,
        })

        //save the user into databases
        const user = await new_user.save();
        // gengreate the token upside in .evn and import into server.js file
        const token = createToken(user._id);
        res.json({success:true,token}) 
    }catch(error){
        console.log(error);
        return req.json({success:false,message:"error"})
    }

}

export {login_user,register_user}