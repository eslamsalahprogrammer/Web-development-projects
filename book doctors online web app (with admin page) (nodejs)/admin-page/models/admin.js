const mongoose = require('mongoose')

const doctorsSchema= new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    role :{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('doctors',doctorsSchema)