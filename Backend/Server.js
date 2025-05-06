import express from "express"
import cors from "cors"
import { connect_db } from "./Config/db.js"
import Animals_routes from "./Routes/Animals_routes.js"

//App Config 
const app = express()
const port = 4000

//middleware
app.use(express.json()) // whenever a request from Fontend to the backend that will be Passed Inside
app.use(cors()) // we can easy access banked from fontend

// To run Express Server 
app.listen(port,()=>{
    console.log(`server Started on http://localhost:${port}`)
})

// calling  the Databases 
connect_db();

 // api endpoint and calling router 
 app.use("/api/animals",Animals_routes);
app.get("/",(req,respone)=>{     // it's HTTP methods using we can request the data from the server for ex:update,delete
    respone.send('API Working')
})
 

//mogoDb Add your connection string into your application code:
//mongodb+srv://Prathmesh:Patil3006@cluster0.5cjjlrw.mongodb.net/? 
