require('dotenv').config()

const express = require('express')

const methodOverrid = require('method-override')

const app = express()
app.use(methodOverrid("_method"));
const adminRouter = require('./routes/admin') 
const mongoose = require('mongoose')



mongoose.connect('mongodb://localhost:27017/doctor-appointment-reservation' , {
    useNewUrlParser:true , useUnifiedTopology:true
}).then(()=>{
    console.log("connection to mongodb success")
})
.catch(()=>{console.log("can't connect to mongo")});
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:false}))
app.use('/admin',adminRouter);



app.listen(4000)
