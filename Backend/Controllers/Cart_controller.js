import userModel from '../Models/User_models.js'
import User_models from '../Models/User_models.js'

// add to cart in user card
const addtocard = async (req,res)=>{
    try {
        let userdata = await userModel.findById(req.body.UserId);
        let cardData = await userdata.cardData;
        if(!cardData[req.body.itemId]){
            cardData[req.body.itemId] = 1;
        } else{
             cardData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.UserId,{cardData});
        res.json({success:"true",message:"Added to card"})
    } catch (error) {
        console.log(error);
        res.json({success:"false",message:'error'})
        
    }
}

// remove to cart in user card
const removetocard = async (req,res) =>{
     try{
        let userdata = await userModel.findById(req.body.UserId);
     let cardData = await userdata.cardData; 
         if(cardData[req.body.itemId]>0){
            cardData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.UserId,{cardData});
         res.json({success:"true",message:"Removed from card"})
     } catch (error) {
        console.log(error);
        res.json({success:"false",message:'error'}) 
    }
}

//fetch user cart data
const getcard = async (req,res )=>{
     try {
        let userdata = await userModel.findById(req.body.UserId);
        let cardData = await userdata.cardData; 
        res.json({success:true,cardData})
     } catch (error) {
        console.log(error)
        res.json({success:"false",message:'error'}) 
     }
}

export{addtocard,removetocard,getcard}