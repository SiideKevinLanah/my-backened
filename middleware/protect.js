const jwt= require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

const protect = (req,res,next)=>{
    const token= req.headers.authorization;
    if (!token) return res.status(401).json({error:"No token"});

    try{
        const decoded = jwt.verify(token, SECRET);
        req.user=decoded;
        next();
    }catch(err){
        res.status(401).json({error:"INvalid token!"});
    }
};

module.exports=protect;