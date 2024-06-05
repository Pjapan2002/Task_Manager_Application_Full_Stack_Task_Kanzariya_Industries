import { Router } from "express";
import { handleHomeGet, handleHomePost, handleHomeDelete , handleHomeEdit } from "../controllers/home.controller.js";
import { loginUserOnly } from '../middlewares/auth.middleware.js'

const router = Router();

router.route('/tasks').get( loginUserOnly, handleHomeGet)

router.route('/tasks').post( loginUserOnly, handleHomePost )

router.route('/tasks/:id').delete( loginUserOnly, handleHomeDelete)

router.route('/tasks/:id').put( loginUserOnly, handleHomeEdit)
 
export default router;