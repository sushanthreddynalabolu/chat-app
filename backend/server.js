 
import express from "express"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import authRoutes from './Routes/auth.routes.js'
import messageRoutes from './Routes/message.routes.js'
import userRoutes from './Routes/user.routes.js'

import connectToMongoDB from "./db/connectToMongoDB.js";

const app=express();
const port=process.env.PORT || 5000;
dotenv.config();


 
app.use(express.json());//to parse the incoming requests with json payloads(req.body)
app.use(cookieParser());
 
app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users",userRoutes)

// app.get("/",(req,res)=>{
//     res.send("hello world is every thing ok")
// })
app.listen(port,()=>{
connectToMongoDB()
console.log(`server is running at port ${port}`)
}
)
