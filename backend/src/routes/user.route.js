import { Router } from "express";
import { handleUserSignupPost, handleUserLoginPost, handleUserLogoutPost } from '../controllers/user.controller.js';
import {loginUserOnly} from '../middlewares/auth.middleware.js'
const route = Router();

// route.route('/userInfo').get( loginUserOnly, handleUserGet );

route.route("/signup").post( handleUserSignupPost );

route.route("/login").post( handleUserLoginPost );

route.route("/logout").post( loginUserOnly, handleUserLogoutPost )

export default route;