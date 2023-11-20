const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    brand:{type:String,required:true},
    pic:{type:String,required:true},
    model:{type:String,required:true},
    startDate:{type:String,required:true},
    endDate:{type:String,required:true},
    totalRent:{type:Number,required:true},
    totalHours:{type:Number,required:true},
    name:{type:String,required:true},
    phoneno:{type:Number,required:true},
    address:{type:String,required:true},
    cid:{type:String,required:true}
},{
    collection: "Bookings"
});
const collection = mongoose.model("bookingSchema",bookingSchema);

module.exports = collection;