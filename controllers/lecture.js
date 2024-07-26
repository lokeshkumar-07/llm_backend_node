import Course from "../models/Course.js";
import Lecture from "../models/Lecture.js";

export const createLecture = async (req, res, next) => {
  try {
    const lecture = new Lecture({ ...req.body });
    const { courseId } = req.body;
    console.log(courseId);
    const course = await Course.findOne({ _id: courseId });
    console.log(course);

    await lecture.save();
    course.lectures.push(lecture._id);

    await course.save();

    res.status(201).send({
      message: "Lecture Created",
    });
  } catch (err) {
    next(err);
  }
};

export const getCourseLectures = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const lectures = await Lecture.find({ courseId: courseId });

    res.status(201).send(lectures);
  } catch (err) {
    next(err);
  }
};

export const getLecture = async (req, res, next) => {
  try {
    const { courseId, lectureId } = req.params;
    const lecture = await Lecture.findOne({
      courseId: courseId,
      _id: lectureId,
    });

    res.status(201).send(lecture);
  } catch (err) {
    next(err);
  }
};
