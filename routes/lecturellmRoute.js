import express from "express";
import {
  allLectureQueries,
  createLectureQuery,
} from "../controllers/lecturellm.js";
import { verifyUser } from "../middleware/verifyUser.js";

const lecturellmRoutes = express.Router();

lecturellmRoutes.post("/:lectureId/create", verifyUser, createLectureQuery);
lecturellmRoutes.get("/:lectureId/all", verifyUser, allLectureQueries);

export default lecturellmRoutes;
