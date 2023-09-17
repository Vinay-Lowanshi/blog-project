const blog=require('../database/blog');

const postblog=async(req,res)=>{
    const {title,author,description}=req.body;
    const {user}=req.params;
const newblog=await blog.create({
    title:title,
    author:author,description:description
})
res.render('post',{user:user})
}

module.exports=postblog