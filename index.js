const mongoose = require("mongoose");
const express = require("express");
const carRoute = require("./controller/carRoute");
const bookingRoute = require("./controller/bookingRoute")
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://test:12345@cluster0.9qmcdvw.mongodb.net/Rent");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/carRoute",carRoute);
app.use("/bookingRoute",bookingRoute);

app.listen(4000,()=>{
    console.log("Server connected at 4000");
})
