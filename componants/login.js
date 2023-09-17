const register=require('../database/register');
const login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await register.findOne({
            where:{
                Email:email}
        })
        if(user.Email===email && user.Password===password)
        {
            res.render('user.ejs',{user:user.Name})
        }
        else{
            res.render('login.ejs',{message:"Incorrect Password"})
        }
    }
   catch(err)
   {
    console.log(err)
    res.render('login.ejs',{message:"Invalid Credential, Register first"})
   }

        
}

module.exports=login