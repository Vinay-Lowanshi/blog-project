const express=require('express')
const app=express()
const bodyParser = require('body-parser');
// Parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const register=require('../database/register');

const user=async(req,res)=>{
    const {name,email,mobile,password}=req.body;
const newuser=await register.create({
    Name:name,
    Email:email,Mobile:mobile,Password:password
})
res.redirect('/')
}

module.exports=user