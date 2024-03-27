import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet";
import morgan from "morgan";
import { router } from "./routes/test.js";
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken"

const secret = "test";

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy :"cross-origin"}));
app.use(morgan("comman"));
app.use(cookieParser());    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors({
    origin:["https://dashboard-gold-nu-95.vercel.app/"],
    methods:["POST","GET"],
    credentials:true
}));

const PORT = process.env.PORT || 5000;

const verifyUser = (req,res,next) =>{
    const token = req.cookies.token;
    if (!token) {
        return res.json({Message:'We need token please provide it'});
    }else{
        jwt.verify(token,secret,(err,decoded) =>{
            if (err) {
                return res.json({Message:'Authentication Error'})
            }else{
                req.pravin = decoded.email
                next();
            }
        })
    }
}


app.use("/user",userRouter)

app.get("/logout",(req,res)=>{
    res.clearCookie("token")
    res.json({logout:true})
})

app.get("/",verifyUser,(req,res)=>{
    return res.json({status:true,email:req.pravin})
})
app.use("/test",router)


mongoose.connect(process.env.MONGO_URL).then(() =>{
    app.listen(PORT,() =>{
        console.log(`Server Port ${PORT}`);
    })
}).catch(err => {
    console.log(err,"errr");
});
