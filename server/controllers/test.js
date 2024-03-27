import test from "../models/test.js";


export const Test = async (req,res) =>{

    try{

    const result = await test.find()
    res.send(result)
    }catch(err){
        console.log(err,"err");
    }


}