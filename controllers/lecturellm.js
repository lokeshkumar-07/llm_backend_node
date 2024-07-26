import { GoogleGenerativeAI } from "@google/generative-ai";

import markdownIt from "markdown-it";
import LectureLLM from "../models/LectureLLM.js";

function indentText(text, indentString) {
  const lines = text.split("\n");
  const indentedLines = lines.map((line) => indentString + line);
  return indentedLines.join("\n");
}

function toMarkdown(text) {
  // Replace '•' with '*'
  text = text.replace(/•/g, "*");
  // Indent text
  text = indentText(text, "> ");

  // Initialize markdown-it
  const md = markdownIt();
  // Render markdown
  return md.render(text);
}

export const createLectureQuery = async (req, res, next) => {
  try {
    const { query } = req.body;

    console.log(req.body);

    const genAi = new GoogleGenerativeAI(process.env.API_KEY);

    const model = genAi.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(query);

    const response = await toMarkdown(result.response.text());

    const queryPackage = new LectureLLM({
      query: query,
      lectureId: req.params.lectureId,
      result: response,
      userId: req.userId,
    });

    await queryPackage.save();

    res.status(201).send(queryPackage);
  } catch (err) {
    next(err);
  }
};

export const allLectureQueries = async (req, res, next) => {
  try {
    console.log("Getting lectue llm");
    console.log(req.params.lectureId);
    const queries = await LectureLLM.find({
      userId: req.userId,
      lectureId: req.params.lectureId,
    });

    res.status(200).send(queries);
  } catch (err) {
    next(err);
  }
};
