const blog=require('../database/blog');
const showblogs=async(req,res)=>{
const item=await blog.findAll()
res.render('blog.ejs',{blogs:item})
}

module.exports=showblogs