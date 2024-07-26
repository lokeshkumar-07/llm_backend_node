import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["mcq", "msq", "subjective"],
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      default: undefined,
    },
    answer: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  { timestamps: true }
);

const AssignmentSchema = new mongoose.Schema(
  {
    questions: [QuestionSchema],
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  { timestamps: true }
);

const Assignment = mongoose.model("Assignment", AssignmentSchema);

export default Assignment;
