const mongoose = require('mongoose')

const appointmentSchema= new mongoose.Schema({
    dr_id:{
        type:String,
        required:true
    },
    name : {
        type:String,
        required:true
    },
    date :{
        type:String,
        required:true
    },
    option:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }


})

module.exports = mongoose.model('appointment',appointmentSchema)