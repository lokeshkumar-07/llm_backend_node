import mongoose from "mongoose";

const LectureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    youtubeId: {
      type: String,
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  { timestamps: true }
);

const Lecture = mongoose.model("Lecture", LectureSchema);

export default Lecture;
