const { config } = require('dotenv');
const { Sequelize } = require('sequelize');
config()
 const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER, 
    process.env.PASSWORD, 
    {
      host: process.env.HOST,
      dialect:"mysql",
      port:3306,
      dialectOptions: {
        connectTimeout: 60000 // 60 seconds
      },
      logging: console.log, // Enable logging for debugging
     
    }); 



    module.exports = {sequelize};