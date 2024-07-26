import express from "express";
import {
  createLecture,
  getCourseLectures,
  getLecture,
} from "../controllers/lecture.js";

const lectureRoutes = express.Router();

lectureRoutes.post("/create", createLecture);
lectureRoutes.get("/:courseId", getCourseLectures);
lectureRoutes.get("/:courseId/:lectureId", getLecture);

export default lectureRoutes;
