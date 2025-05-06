import mongoose from "mongoose"

export const connect_db = async()=>{
    await mongoose.connect('mongodb+srv://Prathmesh:Patil3006@cluster0.5cjjlrw.mongodb.net/Farm-Mart').then(()=>
    console.log('Db connection'))
}

