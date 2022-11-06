import {signup} from "../controllers/user.controller.js";
import Express from "express";
const userrouter  = Express.Router()
userrouter.route("/user/signup").post(signup);
export default userrouter