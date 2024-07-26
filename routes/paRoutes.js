import express from "express";
import { createPA, getCoursePA, getPA } from "../controllers/pa.js";

const paRoutes = express.Router();

paRoutes.post("/create", createPA);
paRoutes.get("/:courseId", getCoursePA);
paRoutes.get("/:courseId/:assignmentId", getPA);

export default paRoutes;
