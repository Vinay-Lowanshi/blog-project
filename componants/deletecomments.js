const comments = require('../database/comments');
const deletecomments= async(req,res)=>{
    const id =req.params.id;
    console.log(id)
    try{
        await comments.destroy({
            where:{
                id:id
            }
    })
    }
    catch(err)
    {
        console.log(err)
    }
   
    res.redirect('/blogs')

}
module.exports=deletecomments;