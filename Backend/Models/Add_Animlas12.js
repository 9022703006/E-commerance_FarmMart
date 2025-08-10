import mongoose from "mongoose";


const cowSchema = new mongoose.Schema({
    fullName: {type:String,required:false},
    email: {type:String,required:false},
    earTagId: {type:String,required:false},
    breedType: {type:String,required:false},
    age: {type:String,required:false},
    milkProduction: {type:String,required:false},
    weight: {type:String,required:false},
    horsPresent: {type:String,required:false},
    vaccinated: {type:String,required:false},
    gender: {type:String,required:false},
    pregnancyStatus: {type:String,required:false},
    address: {type:String,required:false},
    mapLocation: {type:String,required:false},
    exchangeOffer: {type:String,required:false},
    images: {type:String,required:false},
});
const Add_Animlas12 =  mongoose.model("Cow", cowSchema,"Cow");// Cow is databases name

export default Add_Animlas12;
