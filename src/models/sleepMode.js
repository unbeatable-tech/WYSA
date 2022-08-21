const mongoose=require("mongoose")
const sleepSchema=new mongoose.Schema({
    sleepStruggleFrom: {
        min:{type:Number,enum:[0,2,8]},
        max:{type:Number,enum:[2,8]},
     },
     bedTime: Date,
     wakeTime: Date,
     sleepDuration: { type: Number, min: 0, max: 24 }, 
     deletedAt: { type: Date,default:null}, 
},{timestamps:true})

module.exports=mongoose.model('Sleep',sleepSchema)