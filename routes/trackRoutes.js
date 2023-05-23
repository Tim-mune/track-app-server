import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
import { createTrack, getTracks } from "../controllers/trackControllers.js";
router.route("/create").post(auth, createTrack);
router.route("/get-all").get(auth, getTracks);
export default router;
