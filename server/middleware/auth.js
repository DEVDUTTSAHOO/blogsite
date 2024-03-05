import jwt,{ decode } from "jsonwebtoken";

 const auth=async(req,res,next)=>{
   // i need to check if i have a token and what is the userid associated with it
   try {
    const token = req.headers.authorization.split(" ")[1];
    
    const isCustomAuth = token.length<500;
    let decodedtoken;
    if(token && isCustomAuth){
         decodedtoken=jwt.verify(token,"secretkey");
        req.userId = decodedtoken?.id;
    }
    else
    {
        decodedtoken = jwt.decode(token);
        req.userId = decodedtoken?.sub;

    }
    next();
   } catch (error) {
    
    console.log(error);
   }
}
export default auth;