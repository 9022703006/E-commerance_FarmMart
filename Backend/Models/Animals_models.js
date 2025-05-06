
import mongoose from "mongoose";



const animals_data = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: String, required: false },
    category: { type: String, required: true } // optional: was "catergory"
}) 
const animals_models = mongoose.models.animals || mongoose.model("animals", animals_data);

export default animals_models;
