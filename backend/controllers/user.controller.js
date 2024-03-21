import User from "../models/user.model.js";

export const getSideBarUsers= async (req,res)=>{
    try {
        const loggidInUser=req.user._id;
        const allUsers=await User.find({_id:{$ne:loggidInUser}}).select("-password")
        res.status(200).json(allUsers) 
        
    } catch (error) {
        console.log("Error in getusersforsidebar",error.message)
        res.status(500).json({error:"internal server error"})
    }
  
}