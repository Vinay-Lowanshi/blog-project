
const comments=require('../database/comments')
const postcomment=async(req,res)=>{
    const {id}=req.params;
    const {comment}=req.body;
    await comments.create({
        sno:id,
        comment:comment


    })

        console.log("Comment post successfully")
        res.redirect('/blogs')
}

module.exports=postcomment