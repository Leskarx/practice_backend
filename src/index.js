import {app} from "./app.js"
import connectDB from "./db.js";
let port =8000;
app.get("/check",(req,res)=>{
    res.send("server is running successfully");
})

;(async()=>{
    await connectDB();
    app.listen(port,()=>{
        console.log("server is runing at port ",port);
    })


})();





