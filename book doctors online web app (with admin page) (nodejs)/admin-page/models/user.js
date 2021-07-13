const mongoose = require('mongoose')
//const encrypt = require('mongoose-encryption')
const secret = "thisisourlittlesecret"
require('dotenv').config()
const md5 = require("md5")

const usersSchema= new mongoose.Schema({
    username : {
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    }

})
//usersSchema.plugin(encrypt,{secret:process.env.SECRET, encryptedFields : ["password"]})


module.exports = mongoose.model('users',usersSchema)