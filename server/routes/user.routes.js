import {Router} from "express"
import {loginUser, registerUser, logoutUser, refreshAccessToken} from "../controllers/user.controller.js"
const router = Router()

router.route("/register").post(registerUser)
router.route("/signin").post(loginUser)

export default router