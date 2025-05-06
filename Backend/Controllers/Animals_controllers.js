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
    }) 

    try {
        await animals.save();
        response.json({ success:true, message: 'Animal added successfully' }); 
    } catch (error) {
        console.log(error)
        response.json({ success:false, message: "Error while saving animal" });
    }
};

export { add_animals };
