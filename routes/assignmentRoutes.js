import express from "express";
import {
  createAssignment,
  getAssignment,
  getCourseAssignments,
} from "../controllers/assignments.js";

const assignmentRoutes = express.Router();

assignmentRoutes.post("/create", createAssignment);
assignmentRoutes.get("/:courseId", getCourseAssignments);
assignmentRoutes.get("/:courseId/:assignmentId", getAssignment);

export default assignmentRoutes;
