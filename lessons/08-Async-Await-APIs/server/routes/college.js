import express from "express";
import {
  courses,
  students,
} from "../../data/08-fetchCourseEnrollments.data.js";

const collegeRouter = express.Router();

// BASE is /college
collegeRouter.get("/courses", (_, res) => {
  res.json(courses);
});

collegeRouter.get("/students", (req, res) => {
  res.json(students);
});

// Reject all non-GET methods for both `/college/courses` and `/college/students` endpoints
collegeRouter.all("/courses", (_, res) => {
  res.status(405).json({ error: "Method Not Allowed" });
});

collegeRouter.all("/students", (_, res) => {
  res.status(405).json({ error: "Method Not Allowed" });
});

export default collegeRouter;
