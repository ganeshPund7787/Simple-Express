import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
    const {token } = req.cookies;
    
    if(!token) return res.json({msg: "you should login first"});

    req.user = jwt.verify({_id: token}, "ganesh");
    next();
}