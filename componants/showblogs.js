const blog=require('../database/blog');
const comments = require('../database/comments');
const showblogs=async(req,res)=>{
const item=await blog.findAll()
const comment=await comments.findAll()
const {user}=req.params;
console.log(user)
if(user!==undefined)
{
    console.log(user)
res.render('blog.ejs',{blogs:item, comments:comment,user:user})
}
else
{
    res.render('blog.ejs',{blogs:item, comments:comment,user:""})
}
}

module.exports=showblogs