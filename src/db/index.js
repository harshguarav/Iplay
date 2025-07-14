import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connnectDB=async()=>{
    try{
        const connectInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n monogoDB connected !! db host: ${connectInstance.connection.host}`);
    }
    catch(error){
        console.log("mongo connection error",error);
        process.exit(1);
    }
}
// XMLDocument
export default connnectDB;