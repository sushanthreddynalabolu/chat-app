import bcryptj from 'bcryptjs';
import User from "../models/user.model.js";
import generateTokenAndSetCookie from '../utils/generateTokens.js';

// 65f560215ce54c1692f96c0d"
export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            res.status(400).json(({ error: "Passwords do not matched" }))
        }

        const user = await User.findOne({ username })
        if (user) {
            return res.status(400).json({ error: "username already exists" })
        }


        const salt = await bcryptj.genSalt(10);
        const hashedPassword = await bcryptj.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`


        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })
        if (newUser) {

            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();


            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({ error: "invalid user data" })
        }

    } catch (error) {
        console.log("error in signUp controller", error.message)
        res.status(500).json({ error: "internal Server Error" })
    }
}
export const login = async (req, res) => {
    try {
        const {username,password}=req.body;
        const user=await User.findOne({username})
        const isPasswordCorrect=await bcryptj.compare(password,user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"invalid username and password"})
        }

        generateTokenAndSetCookie(user._id,res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic

        })

        
    } catch (error) {
        console.log("error in login controller", error.message)
        res.status(500).json({ error: "internal Server Error" })
    }
     
}
export const logout =  (req, res) => {
    try {
        res.cookie('jwt',"",{maxAge:0})
        res.status(500).json({message:"logged out Successfully"})
        
    } catch (error) {
        console.log("error in signUp controller", error.message)
        res.status(500).json({ error: "internal Server Error" })
    }
}