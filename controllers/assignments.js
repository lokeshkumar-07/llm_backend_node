import Assignment from "../models/Assignment.js";
import Course from "../models/Course.js";

export const createAssignment = async (req, res, next) => {
  try {
    const assignment = new Assignment({ ...req.body });

    const course = await Course.findOne({ _id: req.body.courseId });

    course.assignments.push(assignment._id);
    await assignment.save();
    await course.save();

    res.status(201).send({
      message: "Assignment Created",
    });
  } catch (err) {
    next(err);
  }
};

export const getCourseAssignments = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const assignments = await Assignment.find({ courseId: courseId });

    res.status(200).send(assignments);
  } catch (err) {
    next(err);
  }
};

export const getAssignment = async (req, res, next) => {
  try {
    const { courseId, assignmentId } = req.params;
    const assignment = await Assignment.findOne({
      courseId: courseId,
      _id: assignmentId,
    });

    res.status(200).send(assignment);
  } catch (err) {
    next(err);
  }
};
