import express from "express"
import authMiddleware from "../Middleware/auth_middleware.js"
import { placeorder } from "../Controllers/Order_controller.js";

const order_routes = express.Router();

order_routes.post("/place",authMiddleware,placeorder);

export default order_routes;