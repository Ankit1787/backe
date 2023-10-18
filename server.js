const express =require('express');
const app =require('./app');
const connectDb =require('./database/db')

connectDb();

app.listen(8000,()=>{
    console.log('server is running on port 8000');
})