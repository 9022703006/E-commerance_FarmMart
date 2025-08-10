import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    UserId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String ,default:"Products Processing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
})

const Order_models = mongoose.model.order || mongoose.model("order",orderSchema);

export default Order_models;