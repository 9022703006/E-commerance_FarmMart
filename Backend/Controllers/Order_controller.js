import User_models from "../Models/User_models.js"
import Stripe from "stripe"
import orderModel from "../Models/Order_models.js";


// tp payment
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


// placeing user order from ui
const placeorder = async(req,res)=>{
    // placeing font_end url 
    const frontend_url = "http://localhost:3000"

    try{
        // new order
        const newOrder = new orderModel({
            UserId:req.body.UserId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();
        await User_models.findByIdAndUpdate(req.body.UserId,{cardData:{}})

        // items from user we used for payment
        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                products_data:{
                    name:item.name
                },
                //in indian current *80
                unit_amount:item.price*100*80
            },
            quantity:item.quantity
        }))
        // push shipping charger
        line_items.push({
            price_data:{
                currency:"inr",
                products_data:{
                    name:"Delivery Charges"
                },
                unit_amount: 10*100*80
            },
            quantity:1
        })

        // when payment is true
        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        })

        res.json({success:true,session_url:session.url})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"error12"})

    }
}

export {placeorder}