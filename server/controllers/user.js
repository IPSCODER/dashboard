import user from "../models/user.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs"


const secret = 'test';



export const userSignIn = async (req,res) =>{
    const {email,password} = req.body;
    try{
       const olduser= await user.findOne({email})

       if(!olduser){res.send("Register first")}

       const isPasswordCorrect = await bcryptjs.compare(password,olduser.password);
        if (!isPasswordCorrect) {
            return res.send('wrong password')
        }else{
            const token = jwt.sign({email:olduser.email,id:olduser._id},secret,{expiresIn:'1d'})
            res.cookie('token',token)
            res.status(201).json({result:true,token})   
        }
    }catch(err){
        console.log(err);
    }
}




export const userSignUp = async (req,res) =>{
    const {username,email,password} = req.body;
    try{
       const olduser= await user.findOne({email})
       if(olduser){res.send("user already registered")}
       const hashedPassword = await bcryptjs.hash(password,12);
        const result = await user.create({
            username,
            email,
            password:hashedPassword
        })
       const token = jwt.sign({email:result.email,id:result._id},secret,{expiresIn:'1d'})
       res.cookie('token',token)
       res.status(201).json({result:true,token})

    }catch(err){
        console.log(err);
    }
}





