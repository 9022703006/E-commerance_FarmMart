
import mongoose from "mongoose";

const animals_data = new mongoose.Schema({
  name: { type: String, required: false },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: String, required: true },
  category: { type: String, required: true }, // optional was "category"
});

const animals_models = mongoose.model("animals", animals_data, "animals"); // mongoose.model("ModelName", schema, "collectionName")

export default animals_models;