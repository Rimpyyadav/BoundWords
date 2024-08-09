import express from "express";
import mongooose from "mongoose";
import dotenv from "dotenv";

import bookRoute from "./route/book.route.js"
const app = express();


dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI

try{
    mongooose.connect(URI)
    console.log("Connected to mongoDB");

} catch(error) {
    console.log("Error: ",error);
     

}
app.use("/book",bookRoute)



app.listen(PORT, () =>{
    console.log(`server is listening on port${PORT}`);
});

