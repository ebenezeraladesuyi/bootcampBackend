import { Router } from "express";
import { getAllUser, login, register } from "../controller/user.controller";


const router = Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/getusers").get(getAllUser)


export default router;