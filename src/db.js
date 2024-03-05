import mongoose from "mongoose";

const connectDB=  async function(){
    try {
       await mongoose.connect("mongodb://127.0.0.1:27017/CRUD_practice1");
       console.log("connected to db");
        
    } catch (error) {
        console.log("Error in db.js",error);
        
    }

}
export default connectDB;




// local host
// mongodb://localhost:27017/


// mongodb+srv://leskar:shankar1811@cluster0.n9mz4zz.mongodb.net/