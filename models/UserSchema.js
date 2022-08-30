const { Schema, model} = require("mongoose");

const UserSchema = ({
   name:String,
   email:String,
   hash:String,
});

const User = model("whatsappusers",UserSchema);

module.exports = User;