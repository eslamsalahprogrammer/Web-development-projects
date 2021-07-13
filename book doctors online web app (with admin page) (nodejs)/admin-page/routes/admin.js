require('dotenv').config()

const express = require('express')
const router = express.Router()
const Doctor = require('./../models/admin') 
const Doctors = require('./../models/admin') 
const Appointments = require('./../models/appointment')
const users = require('./../models/user')
const encrypt = require('mongoose-encryption')
const md5 = require("md5")

//const secret = "thisisoursecret"
//users.plugin(encrypt,{secret:secret})
router.get('/',async (req,res)=>{
    const doctors = await Doctor.find()
    res.render('admin',{doctors:doctors})
})
router.get('/adddoctor',(req,res)=>{
    res.render('add_doctors',{doctor : new Doctor()})
})
router.get('/login',(req,res)=>{
    res.render('login')
})
router.get('/register',(req,res)=>{
    res.render('register')
})
router.post('/login', async (req,res)=>{
    const username = req.body.username
    const password = md5(req.body.password)
    const doctors = await Doctor.find()

    users.findOne({username:username},function async(err,foundUser){
        if(err){
            console.log(err)
        }
        else{
            if(foundUser){
                if(foundUser.password === password){

                    res.render('admin',{doctors:doctors})
                }
            }

        }
    })

})
router.post('/register',async (req,res)=>{
    let user = new users({

        username:req.body.username,
        password:md5(req.body.password)
    })
    try{
        user = await user.save()
        //console.log('lol')
        const doctors = await Doctor.find()
        res.render('admin',{doctors:doctors})
    }catch(e){
        console.log("error")
    }
})
router.post('/adddoctor',async (req,res)=>{
    let doctor = new Doctor({
        name:req.body.nameofdoctor,
        role:req.body.roleofdoctor
    })
    try{
        doctor = await doctor.save()
        //res.render('admin')
        res.redirect(`/admin`)
    }catch(e){
        res.render('add_doctor',{doctor:doctor})
    }

})
/*router.delete('/:id',async (res,req)=>{
    try{
        

    console.log(req.params['id'])
    await Doctors.findByIdAndDelete(req.params.id)
    //res.redirect(`/admin`)
    }catch(e){
        console.log("w,ml;daml;sm;lm;dlms")
    }
})*/
router.post('/deletedoctor',(req,res,next)=>{
    const ID = req.body.id
    Appointments.deleteOne({dr_id:ID},(error,doc)=>{
        if(error){
            console.log("error")
        }

    })
    Doctor.deleteOne({_id:ID},(error,doc)=>{
        if(error){
            console.log("error")
        }

    })
    res.redirect('/admin')


})
router.post('/deletepatientreservation',async (req,res,next)=>{
    const ID = req.body.id
    Appointments.deleteOne({dr_id:ID},(error,doc)=>{
        if(error){
            console.log("error")
        }

    })
    res.redirect('doctorreservation/'+ID)
})
router.get('/doctorreservation/:id',async (req,res)=>{
    //res.send(req.params.id)
    //Appointments.find({},{_id:false , id:req.params.id})
    let appoint = await Appointments.find({ dr_id:req.params.id})
    res.render('patientreservation',{appointment:appoint})
})  

module.exports = router