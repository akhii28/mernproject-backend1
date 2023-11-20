const express = require("express");
const bookingSchema = require("../model/bookingSchema")
const bookingRoute = new express.Router();

bookingRoute.post("/new-booking",(req,res)=>{
    bookingSchema.create(req.body,(err,data)=>{
        if(err)
            return(err);
        else
            res.json(data);
    })
});

bookingRoute.get("/",(req,res)=>{
    bookingSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

bookingRoute.get("/:id",(req,res)=>{
    bookingSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

bookingRoute.route("/update-booking/:id")
.get((req,res)=>{
    bookingSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    carSchema.findByIdAndUpdate(req.params.id,{$set:req.body},
        (err,data)=>{
            if(err)
                return err;
            else
                res.json(data);
        })
});

bookingRoute.delete("/delete-booking/:id",(req,res)=>{
    bookingSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});



module.exports = bookingRoute;