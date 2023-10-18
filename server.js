const express =require('express');
const app =require('./app');
const connectDb =require('./database/db')
const dotenv = require('dotenv');
dotenv.config();
connectDb();

app.listen(process.env.PORT,()=>{
    console.log('server is running on port 8000');
})