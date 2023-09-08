const express=require('express')
const app=express()
const bodyParser = require('body-parser');
// Parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const blog=require('../database/blog');
const { redirect } = require('server/reply');
app.use(express.static('public'))
const postblog=async(req,res)=>{
    const {title,author,description}=req.body;
const newblog=await blog.create({
    title:title,
    author:author,description:description
})
res.redirect('/')
}

module.exports=postblog