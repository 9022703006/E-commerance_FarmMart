import { request } from "http";
import Add_Animlas12 from "../Models/Add_Animlas12.js";
import fs from 'fs'

const main_animlas= async (req,res)=>{
console.log(`${req.body}`);
console.log("req.body----------------", req.body);
  const animlas_main = new Add_Animlas12({
      //name: req.body.name,
      fullName:req.body.fullName,
      email:req.body.email,
      earTagId:req.body.earTagId,
      breedType:req.body.breedType,
      age:req.body.age,
      milkProduction:req.body.milkProduction,
      weight:req.body.weight,
      horsPresent:req.body.horsPresent,
      vaccinated:req.body.vaccinated,
      gender:req.body.gender,
      pregnancyStatus:req.body.pregnancyStatus,
      address:req.body.address,
      mapLocation:req.body.mapLocation,
      exchangeOffer:req.body.exchangeOffer,
  });


  try{
    await animlas_main.save();
    res.json({success:true,message:"Animals save succefully..."});
  
  }catch(error){
   console.error("Animal Save Error:", error.message, error.stack);
  res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }

}
//all animals list
const list_animals_input = async(req,res)=>{
    try{
        const animal_data1= await Add_Animlas12.find({});
        res.json({success:true,data:animal_data1})
    }
    catch(error){
        console.log(error);
        res.json({ success :false, massage :error})
    }
}

export  {main_animlas,list_animals_input};