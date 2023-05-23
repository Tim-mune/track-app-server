import express from "express";
import { register, login } from "../controllers/authController.js";
const router = express.Router();
import auth from "../middleware/auth.js";
router.route("/register").post(register);
// router.use(auth);
router.route("/login").post(auth, login);

export default router;
