import express from "express";
import { postUserData, getUsers } from "../controllers/user-controller.js";

const router = express.Router();

router.route('/add').post(postUserData);
router.route('/all').get(getUsers);

export default router;