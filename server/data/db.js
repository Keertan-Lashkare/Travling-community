import mongoose from "mongoose";
function db(){mongoose.connect("mongodb://localhost:27017",{
    dbName:"travel"
}).then(()=>{
    console.log("database connected");
}).catch((error)=>{
    console.log(error);
})}
export default db;