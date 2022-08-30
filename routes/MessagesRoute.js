const Msg = require("../models/MessagesSchema");
const Router = require("express");
const MessagesRoute = Router();



//Getting single user
MessagesRoute.post("/allfor", async(req,res)=>{
    const {senderid,reciverid} = req.body;
    const msgs = await Msg.find({$and: [{senderid: senderid},
    {reciverid: reciverid}]})
    res.send(msgs);
})

//Getting all the msgs for that user
MessagesRoute.get("/all", async(req,res)=>{
    const users = await Msg.find();
    res.send(users);
})

//Saving new message
MessagesRoute.post("/new",async(req,res)=>{
    const {senderid,reciverid,msg}=req.body;
    const message = new Msg({senderid,reciverid,msg});
    message.save().then(()=>{
        res.send({message:"Message saved"});
    });
});

module.exports=MessagesRoute;