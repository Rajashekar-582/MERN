import mongoose from "mongoose";

export const dbConnection= ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"RMS"
    
    } ).then(()=>
    console.log("connected database successfully"
    )).catch(err=>{
        console.log(`Some error while connecting to database! ${err}`);
    });
}