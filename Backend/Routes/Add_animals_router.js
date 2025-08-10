import express from "express"
import {main_animlas,list_animals_input } from "../Controllers/Add_animals_controller.js";

const Add_animals_router1 = express.Router();

Add_animals_router1.post("/put",main_animlas);
Add_animals_router1.get("/list",list_animals_input);

export default Add_animals_router1;