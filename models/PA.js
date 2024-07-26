import mongoose from "mongoose";

const PASchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    testCases: [
      {
        input: {
          type: String,
          required: true,
        },
        expectedOutput: {
          type: String,
          required: true,
        },
      },
    ],
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  { timestamps: true }
);

const PA = mongoose.model("PA", PASchema);

export default PA;
