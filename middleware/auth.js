import { User } from "../model/models.user.js";
import { errorHandler } from "../utils/error.handler.js";
import jwt from "jsonwebtoken"

export const isAutheticated = async(req, res, next) => {
    const {cookie } = req.cookies;

    if(!cookie) return next(errorHandler(404, "You should login first"))

    const data = jwt.verify("cookie",  process.env.JWT_PASSWORD_KEY);

    req.user = await User.findById({_id: data._id})
    next();
}