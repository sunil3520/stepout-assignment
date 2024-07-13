
const { configDotenv } = require("dotenv");
const express = require("express");
configDotenv();
const app = express();

// Middleware section




// Main route section
app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Train Manangement Server");
})





app.listen(process.env.PORT,()=>{
    console.log(`Server is runnin on port ${process.env.PORT}`);
})