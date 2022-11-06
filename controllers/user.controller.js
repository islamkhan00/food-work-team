import jwt from "jsonwebtoken";
// import fs from "fs";
import bcrypt from "bcrypt";
import User from "../models/user.model.js"
export const signup = async(req,res) =>{
  
   try{
      const IsEmailExist = await User.findOne({email:req.body.email})
      const IsMobileExist = await User.findOne({mobile:req.body.mobile})
      if(IsEmailExist){
         res.send({
            status:false,
            msg:"Email already exist.",
            data:{}
         });
         return;
      }else if(IsMobileExist){
         res.send({
            status:false,
            msg:"Mobile already exist.",
            data:{}
         });
         return;
      }
      else{
            const passwordHash = await bcrypt.hash(req.body.password,10)
            req.body.password = passwordHash
            var user = await User.create(req.body);
            if(user){
            user.token = await jwt.sign({time:Date(),userId:user._id},"coaching")
            res.send({
               status:true,
               msg:"Signup Successfully.",
               data:user
            });
         }else{
            res.send({
               status:false,
               msg:"som misteck",
               data:{}
            })
         }          
      }
   }
   catch (err){
      res.status(401).send({
         status:false,
         msg:"Something wrong with request.",
         data:err
      })
   }
}