//jshint esversion:6
const express = require('express');
const mongoose = require('mongoose');
const Doctors = require('./models/doctors');
const Appointments = require('./models/appointment')

mongoose.connect('mongodb://localhost:27017/doctor-appointment-reservation' , {
    useNewUrlParser:true , useUnifiedTopology:true
}).then(()=>{
    console.log("connection to mongodb success")
}).catch(()=>{console.log("can't connect to mongo")});


const app = express();
app.use(express.urlencoded({extended:false}))

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
//app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

app.get("/Homepage",function(req,res){
    res.sendFile(__dirname+"/HTML/homepage.html");

});
app.get("/Homepage/quiz1",function(req,res){
    res.sendFile(__dirname+"/HTML/quiz1.html");

});
app.get("/Homepage/quiz2",function(req,res){
    res.sendFile(__dirname+"/HTML/quiz2.html");

});
app.get("/Homepage/quiz3",function(req,res){
    res.sendFile(__dirname+"/HTML/quiz3.html");

});
app.get("/Homepage/quiz4",function(req,res){
    res.sendFile(__dirname+"/HTML/quiz4.html");

});
app.get("/Homepage/quiz5",function(req,res){
    res.sendFile(__dirname+"/HTML/quiz5.html");

});
app.get("/Homepage/quiz6",function(req,res){
    res.sendFile(__dirname+"/HTML/quiz6.html");

});
app.get("/Homepage/quiz6",function(req,res){
    res.sendFile(__dirname+"/HTML/quiz6.html");

});
app.get("/Homepage/advices",function(req,res){
    res.sendFile(__dirname+"/HTML/advices.html");

});
app.get("/Homepage/doctors",async function(req,res){
    const doctors = await Doctors.find()
    res.render('doctors',{doctors:doctors});

});
app.get("/Homepage/doctors/appointment/:id",function(req,res){
    doctor_id=req.params.id
    //res.sendFile(__dirname+"/HTML/appointment.html");
    res.render('appointment',{doctor_id:doctor_id})
});
app.post("/Homepage/doctors/appointment",async function(req,res){
    //req.params.id
    let appointment = new Appointments({
        dr_id:req.body.custId,
        name:req.body.name,
        date:req.body.date,
        option:req.body.option,
        phone:req.body.phone,
        message:req.body.message



    })
    try{
        appointment = await appointment.save()
        //res.render('admin')
        res.redirect(`/Homepage/doctors`)
    }catch(e){
        res.render('appointment',{appointment:appointment})
    }
});


app.listen(3000,function(){
    console.log("this web app is running at port ");

});
 