import Course from "../models/Course.js";
import PA from "../models/PA.js";

export const createPA = async (req, res, next) => {
  try {
    const pa = new PA({ ...req.body });
    const { courseId } = req.body;
    console.log(courseId);
    const course = await Course.findOne({ _id: courseId });

    course.p_assignments.push(pa._id);
    await pa.save();
    await course.save();

    res.status(201).send({
      message: "PA Created",
    });
  } catch (err) {
    next(err);
  }
};

export const getCoursePA = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const assignments = await PA.find({ courseId: courseId });

    res.status(200).send(assignments);
  } catch (err) {
    next(err);
  }
};

export const getPA = async (req, res, next) => {
  try {
    const { courseId, assignmentId } = req.params;

    const assignment = await PA.findOne({
      courseId: courseId,
      _id: assignmentId,
    });

    res.status(200).send(assignment);
  } catch (err) {
    next(err);
  }
};
