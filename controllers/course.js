import Course from "../models/Course.js";

export const createCourse = async (req, res, next) => {
  try {
    const course = new Course({ ...req.body });

    await course.save();

    res.status(201).send({
      message: "Course Created",
    });
  } catch (err) {
    next(err);
  }
};

export const getCourses = async (req, res, next) => {
  try {
    const course = await Course.find({})
      .populate("lectures")
      .populate("assignments")
      .populate("p_assignments");

    res.status(201).send(course);
  } catch (err) {
    next(err);
  }
};

export const getCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await Course.findOne({ _id: id })
      .populate("lectures")
      .populate("assignments")
      .populate("p_assignments");

    res.status(201).send(course);
  } catch (err) {
    next(err);
  }
};
