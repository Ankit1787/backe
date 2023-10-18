const mongoose = require('mongoose');
const MONGO_URL='mongodb+srv://nikhil807665:pPFfzHBlxEGwjLOk@cluster0.orwpet5.mongodb.net/mern?retryWrites=true&w=majority'
const connectDb=async()=>{
    try {
       await mongoose.connect(MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log('db connected');

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;