  const jwt = require("jsonwebtoken");

  const AuthMiddleWare = (req,res,next) => {

    const token = req.header('Authorization');

    if(!token) {
       return  res.status(400).json({message: 'Access Denied'})
    }
    try {
        const  tpdetails = jwt.verify(token, // secret key JWT

        )
       req.user = tpdetails; 
       next();
    } catch (error) {
        res.status(400).json({message: "Invalid Token Bro "})
    }


  }
  module.exports = AuthMiddleWare