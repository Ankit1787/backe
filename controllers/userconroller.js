
const User =require('../models/usermodels')
const Errorhandler=require('../utils/Errorhandler')
const errorMiddleware=require('../middleware/ErrorMiddleware')
exports.createUser=errorMiddleware(async(req,res,next)=>{
  
  const user= await User.create(req.body);
  if(!user)
  {
    return next(new Errorhandler('user not created',400))
  }  
  res.status(200).send({
    success:true,
    user
  })
})
exports.updateUser=errorMiddleware(async(req,res,next)=>{
 
  const user=await User.findByIdAndUpdate(req.params.id,req.body)
    if(!user){
      return next(new Errorhandler('user not updated',400))
    
    }
    res.status(200).send({success:true,user})
  })
exports.deleteUser=errorMiddleware(async(req,res,next)=>{
 
  const user=await User.findByIdAndDelete(req.params.id.trim())
  if(!user){
    return next(new Errorhandler('user not deleted',400))
  
  }
  res.status(200).send({success:true,user})


})
exports.getuser=errorMiddleware(async(req,res,next)=>{
    const user=await User.find({})
    if(!user){
      return next(new Errorhandler('users not found',400))
    
    
    }
    res.status(200).send({success:true,user})
})