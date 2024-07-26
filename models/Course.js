import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    lectures: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lecture",
      },
    ],
    assignments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assignment",
      },
    ],
    p_assignments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PA",
      },
    ],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", CourseSchema);

export default Course;
