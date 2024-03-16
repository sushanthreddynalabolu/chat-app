import  Mongoose  from "mongoose";
const connectToMongoDB=async ()=>{
    try {
        await Mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connected to Mongodb")
        
    } catch (error) {
        console.log("Error connecting to Mongodb",error.message)
        
    }
}

export default connectToMongoDB;