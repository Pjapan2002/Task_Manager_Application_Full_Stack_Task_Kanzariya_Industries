// import User from '../models/user.model.js';
// import jwt from "jsonwebtoken";

// const access_Token_Secret = "JapanPatelSDEDev#07@2002";

// export async function loginUserOnly(req, res, next) 
// {
//     const token = req.cookies?.accessToken;
    
//     if (!token) {
//         console.log(token);
//         throw new Error(401, "Unauthorized request")
//     }

//     const decodedToken = jwt.verify(token, access_Token_Secret)
    
//     const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
//     if (!user) {
//         throw new Error(401, "Invalid Access Token")
//     }
//     // console.log("hello");
//     req.user = user;
//     next()
// }


import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

const access_Token_Secret = 'JapanPatelSDEDev#07@2002';

export async function loginUserOnly(req, res, next) {
  try {
    // console.log(req);
    // console.log("this is token used ar middeleware " ,token1);
    console.log(req.cookies);   
    const token = req.cookies?.accessToken;
    console.log("Token ",token)
    if (!token) {
      const error = new Error('Unauthorized request for loginUserOnly');
      error.status = 401;
      throw error;
    }


    const decodedToken = jwt.verify(token, access_Token_Secret);

    const user = await User.findById(decodedToken?._id).select('-password -refreshToken');

    if (!user) {
      const error = new Error('Invalid Access Token');
      error.status = 401;
      throw error;
    }

    req.user = user;
    next();
  } catch (err) {
    next(err); // Pass the error to the next middleware (e.g., error handler)
  }
}