import express from "express";
import { postUserData } from "../controllers/user-controller.js";

const router = express.Router();

router.route('/add').post(postUserData);

export default router;