import mongoose from "mongoose";

const querySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    lectureId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lecture",
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
    result: {
      type: String,
    },
  },
  { timestamps: true }
);

const LectureLLM = mongoose.model("LectureLLM", querySchema);

export default LectureLLM;
