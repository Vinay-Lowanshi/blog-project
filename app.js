const sequelize = require('./database/connect.js');
const express=require('express')
const bodyParser = require('body-parser');
const app=express()
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs")


const postblog=require('./componants/postblog.js')
const blogform=require('./componants/blogform.js')
const user=require('./componants/register')
const showblogs=require('./componants/showblogs.js')
const postcomment=require('./componants/postcomment.js')
const deletecomments=require('./componants/deletecomments.js')
const login=require('./componants/login.js')

app.get('/',(req,res)=>{
    res.render('login.ejs',{message:" "})
})
app.get('/register',(req,res)=>{
    res.render('register')
})
app.get('/blogs',showblogs)
app.get('/blogs/:user',showblogs)
app.post('/blogs/:user',showblogs)
app.post('/login',login)
app.post('/postblogs/:user',postblog)
app.get('/postblogs/:user',blogform)
app.post('/comments/:id',postcomment)
app.get('/comments/delete/:id',deletecomments)
app.post('/register',user)
app.get('/logout',(req,res)=>{res.render('login.ejs',{message:""})})
sequelize.sync()
app.listen(3000,()=>"server is running on port 3000")