const connection = require("./db/db");
const express = require("express");
const cors = require("cors");
const UserRoute = require("./routes/UserRoute");
const MessagesRoute = require("./routes/MessagesRoute");


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:3000","https://whatsapp-frontend-rouge.vercel.app","https://effervescent-praline-e17a3e.netlify.app"],
    })
  );
app.use("/user",UserRoute);
app.use("/message",MessagesRoute);

//testing
app.get("/",(req,res)=>{
  res.send("whatsapp clone working....")
})

// starting the server && checking db connection
const PORT = process.env.PORT || 8060
app.listen(PORT, async () => {
    try {
      await connection;
      console.log("Connected to Database Successfully &");
    } catch (err) {
      console.log(err);
    }
    console.log("Backend is working at http://localhost:8060");
});

