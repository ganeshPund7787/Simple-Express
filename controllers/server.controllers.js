
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.handler.js";
import jwt from "jsonwebtoken"
import { User } from "../model/models.user.js";


export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const isExist = await User.findOne({ email })

        if (isExist) return next(errorHandler(404, "User already Exist"));

        const hashPassword = bcryptjs.hashSync(password, 10);

        await User.create({ name, email, password: hashPassword });

        res.status(201).json({
            message: "user Resister successfuly"
        })
    } catch (error) {
        next(error);
    }
}



export const loginUser = async (req, res, next) => {
    
       try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return next(errorHandler(400, "user is not exist"));

        const isPasswordMatch = bcryptjs.compareSync(password, user.password);

        if (!isPasswordMatch) return next(errorHandler(404, "Wromg Password"));
        // cookie
        const token = jwt.sign({_id: user._id},"ganesh");
        res.status(200).cookie("token", token, {httpOnly: true, maxAge: 24*60*60*1000})
        .json({
            message: "User login succeessfuly"
        });

       } catch (error) {
            next();
       }
        
}


export const profile = (req, res, next) => {
    const {user} = req;

    const {password, ...rest} = user._doc;

    res.json({
        msg: "profile page", 
        rest
    })
}

export const logout = (req, res) => {
    res.clearCookie("token",  "ganesh").json({msg: "logout"})
}
