import express from 'express'
import { login_user,register_user } from '../Controllers/User_controller.js'

const userRoutes = express.Router();

// to build the path of url

userRoutes.post("/register",register_user);
userRoutes.post("/login",login_user);

export default userRoutes;