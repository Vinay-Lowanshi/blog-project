
const blogform=(req,res)=>{
    const {user}=req.params;
    res.render('post.ejs',{user:user})
}

module.exports=blogform