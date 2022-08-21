const sleepModel = require("../models/sleepMode")

const sleepBed=async function (req,res){
    let data=req.body
    const bedtime=await sleepModel.create(data)
    return res.status(201).send({status:true,msg:bedtime})

    

}
module.exports.sleepBed=sleepBed

const wakeBed=async function(req,res){
    let data=req.body
    
    const wakeBed=await sleepModel.create(data)
    return res.status(201).send({staus:true,msg:wakeBed})
}
module.exports.wakeBed=wakeBed


const sleepStruggleFrom=async function(req,res){
    let data=req.body

    const sleepStruggle=await sleepModel.create(data)
    return res.status(201).send({status:true,msg:sleepStruggle})
    
}
module.exports.sleepStruggleFrom=sleepStruggleFrom

const sleepDuration=async function(req,res){
    let sleepid=req.params.id
    let wakeid=req.params.id
    let findsleep=await sleepModel.find({id:sleepid}).select({bedTime:1})

        let save=findsleep

        let findwake=await sleepModel.find({id:wakeid}).select({wakeTime:1})
        let save2=findwake
        console.log(save2)

        let result=save-save2

        return res.send({status:true,msg:result})
}
module.exports.sleepDuration=sleepDuration