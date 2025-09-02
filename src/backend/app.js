const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const userRouter = require("./routers/userRouters");
 
const app = express();
app.use(bodyparser.json());
app.use(cors());
 
// 1. MOdal
// 2. Controller
// 3. Router
// 1 .postman
// 2. thunderclint -> extension
 
const mongoDB_url = "mongodb+srv://praveenpentakota29:sBgSeBV4Rl5nMU7f@cluster0.vk8giw1.mongodb.net/";
mongoose.connect(mongoDB_url)
    .then(() => console.log("data base connected"))
    .catch((er) => console.log(er));
 
app.get("/get-data", (req, res) => {
    console.log("data sending");
    res.send("hello i am here");
})
 
app.use('/api', userRouter);
 
app.listen(7000, () => {
    console.log("server running at port 7000");
})
