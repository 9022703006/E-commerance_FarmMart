
import animals_models from '../Models/Animals_models.js';
import fs from 'fs';

const add_animals = async (req, response) => {

   let images_filename = `${req?.file?.filename}`;

    const animals = new animals_models({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        images: images_filename
    });

    try {
        await animals.save();
        response.json({ success: true, message: 'Animal added successfully' });
    } catch (error) {
        console.log(error);
        response.json({ success: false, message: "Error while saving animal" });
    }
};

//all animals list
const list_animals = async(req,res)=>{
    try{
        const animal_data1= await animals_models.find({});
        res.json({success:true,data:animal_data1})
    }
    catch(error){
        console.log(error);
        res.json({ success :false, massage :error})
    }
}
// remove the food

const removeproducts = async(req,res)=>{
    try{
        const animals_remove = await animals_models.findById(req.body.id);
        fs.unlink(`uploads/${animals.images}`,()=>{})
        
        await animals_models.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Products remove"})
    } catch(error){
        console.log(error);
         res.json({success:false,message:"Error"})
    }
}

export { add_animals , list_animals,removeproducts};
