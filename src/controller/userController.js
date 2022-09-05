const user = require("../models/UserModel")

const createdata=async function(req,res){
    let requestBody=req.body

let{phone,username,password}=requestBody
if(!phone){
    return res.status(400).send({status:false,msg:"phone number is required"})
}
if(!username){
    return res.status(400).send({status:false,msg:"username is required"})
}if(!password){
    return res.status(400).send({status:false,msg:"password is required"})
}

let save=await user.create(requestBody)
return res.status(201).send({status:true,msg:save})
}

module.exports.createdata=createdata

