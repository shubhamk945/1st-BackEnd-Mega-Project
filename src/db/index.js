import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import 'dotenv/config'


const connectDB = async () => {
    if (!process.env.MONGODB_URI) {
        console.error("MONGODB_URI is not defined in the environment variables. Please set it in your .env file.");
        process.exit(1);
    }
    try{
     const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`\n MongoDB connected !! DB HOST: 
        ${connectionInstance.connection.host}`);
     
    } catch(error){
        console.log("MONGODB CONNECTION error ", error);
        process.exit(1)
    }
}

export default connectDB


// shubhamk6777_db_user
// shubham123