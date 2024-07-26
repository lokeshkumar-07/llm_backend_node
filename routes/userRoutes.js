import express from "express";
import { googleSignIn } from "../controllers/user.js";

const userRoutes = express.Router();

userRoutes.post("/googlelogin", googleSignIn);

export default userRoutes;
