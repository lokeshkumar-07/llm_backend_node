import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import lectureRoutes from "./routes/lectureRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";
import paRoutes from "./routes/paRoutes.js";
import lecturellmRoutes from "./routes/lecturellmRoute.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
// app.use(fileUpload())

app.use("/api/auth", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/lectures", lectureRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/pa", paRoutes);
app.use("/api/lecturellm", lecturellmRoutes);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong!";

  res.status(errStatus).json({
    status: errStatus,
    success: false,
    message: errMessage,
    stack: err.stack,
  });
});

mongoose.connect(MONGO_URL, {}).then(() => {
  app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));
});
