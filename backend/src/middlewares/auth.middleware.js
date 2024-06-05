import User from '../models/user.model.js';
import jwt from "jsonwebtoken";

const access_Token_Secret = "JapanPatelSDEDev#07@2002";

export async function loginUserOnly(req, res, next) 
{
    const token = req.cookies?.accessToken;
    
    if (!token) {
        throw new Error(401, "Unauthorized request")
    }

    const decodedToken = jwt.verify(token, access_Token_Secret)
    
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
    if (!user) {
        throw new Error(401, "Invalid Access Token")
    }
    // console.log("hello");
    req.user = user;
    next()
}