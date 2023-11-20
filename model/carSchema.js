const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
    "brand":{type:String},
    "pic":{type:String,},
    "model":{type:String},
    "rent":{type:Number},
    "availability":{type:String},
    "fuelType":{type:String},
    "seating":{type:Number},
    "mileage":{type:String},
    "transmission":{type:String},
    "engine":{type:String}
},{
    collection: "Details"
});
module.exports = mongoose.model("carSchema",carSchema);