const { Schema, model} = require("mongoose");

const MessageSchema = ({
   senderid:String,
   reciverid:String,
   msg:String,
});

const Msg = model("whatsappmsgs",MessageSchema);

module.exports = Msg;