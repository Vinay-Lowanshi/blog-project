const sequelize = require('./database/connect.js');
const express=require('express')
const app=express()
const path=require('path')
const postblog=require('./componants/blog')
const blog=require('./database/blog')
const showblogs=require('./componants/showblogs.js')
app.set("view engine", "ejs")
const postcomment=require('./componants/postcomment.js')
const bodyParser = require('body-parser');
// Parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.sendFile('index.html')
})
app.get('/blogs',showblogs)
app.post('/blogs',postblog)
app.post('/blog/:id',postcomment)
sequelize.sync()
app.listen(3000,()=>"server is running on port 3000")