import express from "express";
import userrouter from "./routes/user.route.js";
const app = express()
app.use(express.json())
app.use(userrouter)
app.listen(process.env.PORT || 4000,(req,res) =>{
    console.log(" server connected with PORT:4000");
})
 