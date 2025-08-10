import mongoose from "mongoose";

// create a databases and table

const userschema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true}, // unique means no same emil_id
    password:{type:String,required:true},
    cardData:{type:Object,default:{}}
},{minimize:false})// minimize:false means cardData default is empty that why

// if databses is already presented...
const userModel = mongoose.model.user|| mongoose.model("user",userschema);

export default userModel;