import express from "express";
import { add_animals } from "../Controllers/Animals_controllers.js";
import multer from "multer";// for  add the images

const Animals_routes = express.Router();// add the router and save in server.js files

// // logic for storages the data into multer
const storage = multer.diskStorage({
    destination: "uploads", // the Uploads folder the images will saves
    filename:(req, file, callback) => {
        return callback(null, `${Date.now()}${file.originalname}`);// the Date.now() will save the img in file.originalname i'ts help to store images in unquies name
    }
});3

const uploads = multer({ storage: storage });// to store the data 


// using post() methods used for send data from server in sever our data will process 
// using post() methods we can easy create get(),post(),and other methods

Animals_routes.post("/add",uploads.single("images"),add_animals);


export default Animals_routes;

