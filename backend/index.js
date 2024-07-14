
const { configDotenv } = require("dotenv");
const express = require("express");
configDotenv();
const {sequelize} = require("./config/db");
const app = express();

// Middleware section




// Main route section
app.get("/",(req,res)=>{    
res.status(200).send("Welcome to the Train Management Server");     
})





app.listen(process.env.PORT,async ()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
    console.log(`Server is running on port ${process.env.PORT}`);
})