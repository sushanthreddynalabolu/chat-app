// import express from 'express'

import jwt from "jsonwebtoken";
import User from '../models/user.model.js';

const protectRoutes= async (req,res,next)=>{
    try {
        const token =req.cookies.jwt;

        if(!token) {
            return res.status(401).json({ error: "unAuthorized no token" })
        }

        
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({ error: "invalid token" })
        }

        const user=await User.findById(decoded.userId).select("-password")

        if(!user){
            return res.status(404).json({ error: "user not found" }) 
        }

        req.user=user
        next()

    } catch (error) {
        console.log("error in protect Route",error.message)
        res.status(500).json({ error: "internal Server Error" })
    }


}
export default protectRoutes;