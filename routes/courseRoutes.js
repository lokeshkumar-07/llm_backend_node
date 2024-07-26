import express from "express";
import { createCourse, getCourse, getCourses } from "../controllers/course.js";

const courseRoutes = express.Router();

courseRoutes.post("/create", createCourse);
courseRoutes.get("/all", getCourses);
courseRoutes.get("/:id", getCourse);

export default courseRoutes;
