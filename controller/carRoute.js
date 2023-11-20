const express = require("express");
const carSchema = require("../model/carSchema")
const carRoute = new express.Router();

carRoute.post("/create-car",(req,res)=>{
    carSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

carRoute.get("/",(req,res)=>{
    carSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

carRoute.get("/:id",(req,res)=>{
    carSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

carRoute.route("/update-car/:id")
.get((req,res)=>{
    carSchema.findById(req.params.id,(err,data)=>{
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


carRoute.delete("/delete-car/:id",(req,res)=>{
    carSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

module.exports = carRoute;

