import { addtocard,removetocard,getcard } from "../Controllers/Cart_controller.js";
import express from "express"
import auth_middleware from "../Middleware/auth_middleware.js";

const cart_router = express.Router(); // using this router we can create mutilple end point

// this are the endpoint
cart_router.post("/add",auth_middleware,addtocard);
cart_router.post("/remove",auth_middleware,removetocard);
cart_router.post("/get",auth_middleware,getcard);

export default cart_router;