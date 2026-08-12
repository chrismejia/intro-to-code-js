import express from "express";
<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/server/routes/college.js
import { courses, students } from "../../data/08-fetchCourseEnrollments.data.js";
=======
import { courses, students } from "../../data/08-fetchCourseEnrollments.data";
>>>>>>> dev:lessons/08-Async-Await-APIs/server/routes/college.js

const collegeRouter = express.Router();

// BASE is /college
collegeRouter.get("/courses", (req, res) => {
  const { courseType } = req.query;

  if (courseType === undefined) {
    // Return all courses if no courseType is specified
    return res.json(courses);
  }

  if (courseType !== "mandatory" && courseType !== "elective") {
    // Invalid courseType query parameter
    return res.status(400).json({
      error: "Invalid courseType. Valid values are 'mandatory' or 'elective'.",
    });
  }

  // Filter courses by courseType
  const filteredCourses = courses.filter(
    (course) => course.type === courseType
  );

  if (filteredCourses.length === 0) {
    // If no courses match the type, return an empty array
    return res.status(404).json({
      error: `No courses found for the type '${courseType}'.`,
    });
  }

  res.json(filteredCourses);
});

// /college/students
collegeRouter.get("/students", (_, res) => {
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
