import jwt from "jsonwebtoken"

const auth_middleware = async (req,res,next)=>{
    const {token} = req.headers;
    if(!token){
        return res.json({success:false,message:"Not Authorized Login agin"})
    }
    try{
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.UserId = token_decode.id;
        next();
    }catch(error){
         console.log(error);
          res.json({success:false,message:"error1"})
    }
}

export default auth_middleware;