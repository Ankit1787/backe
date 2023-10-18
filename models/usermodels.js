const mongoose = require('mongoose');
const validator = require('validator') ;

const userSchema=new mongoose.Schema({

    name:{
        required:[true,'please enter your name'],
        type:String,
        trim:true,
       
        maxlength:[3,"name must have min 3 characters"],
        maxlength:[30,"name cannot exceed 30 characters"],

        
    },
    gender:{
        type:String,
        required:[true,'please enter your gender']
    },
    email:{
        required:[true,'please enter your name'],
        type:String,
        unique:true,
       
       validate:[validator.isEmail,"please enter valid email"]

    },
    password:{
        required:[true,'please enter your password'],
        type:String,
        maxlength:[30,"password cannot exceed 30 characters"],
        minlength:[8,"password should have more than 4 characters"],length:[8,"password cannot exceed 30 characters"],
        select:false,

    },
    age:{
        required:[true,'please enter your age'],
        type:Number,
        trim:true,
       
        maxlength:[3,"age should not greater than 3 character"],
     


    }

    
})

module.exports = mongoose.model('temp',userSchema);