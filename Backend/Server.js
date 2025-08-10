import express from "express"
import cors from "cors"
import { connect_db } from "./Config/db.js"
import Animals_routes from "./Routes/Animals_routes.js"
import userRoutes from "./Routes/User_routes.js"
import Add_animals_router1 from './Routes/Add_animals_router.js'


// for token in login and resgister
import 'dotenv/config.js'
import cart_router from "./Routes/Cart_routes.js"
import order_routes from "./Routes/Order_routes.js"
import Add_animals_router from "./Routes/Add_animals_router.js"

//App Config 
const app = express()
const port = process.env.PORT || 4000;

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // whenever a req.body to work and  from Fontend to the backend that will be Passed Inside
app.use("/uploads", express.static("uploads"));
app.use(cors()) // we can easy access banked from fontend


// api endpoint and calling router 
 app.use("/api/animals",Animals_routes);
 //app.use("/api/animals",Add_animals_router);

 //api endpoint of user and register
 app.use("/api/user",userRoutes);

 // api endpoint of cartuser
 app.use("/api/cart",cart_router);

 // api endpoint of order
 app.use("/api/order",order_routes)

 //api endpoint of ADD ANIMLAS
 app.use("/api/main",Add_animals_router1);


// To run Express Server 
app.listen(port,()=>{
    console.log(`server Started on http://localhost:${port}`)
})

// calling  the Databases 
connect_db();

app.get("/",(req,respone)=>{     // it's HTTP methods using we can request the data from the server for ex:update,delete
    respone.send('API Working')
})


 

//mogoDb Add your connection string into your application code:
//mongodb+srv://Prathmesh:Patil3006@cluster0.5cjjlrw.mongodb.net/? 
