/**
 * 08 - fetchCourseEnrollments
 *
 * `fetchCourseEnrollments` retrieves enrollment details for courses based on their type.
 * `fetchCourseEnrollments` accepts one optional input, `courseType`, which can be either "mandatory" or "elective".
 *
 * - When `courseType` is not provided: fetches enrollment data for all courses.
 * - When `courseType` is "mandatory": fetches enrollment data for all mandatory courses.
 * - When `courseType` is "elective": fetches enrollment data for all elective courses.
 *
 * It fetches course data from `/college/courses` and student enrollment data from `/college/students`. If `courseType` is provided, your `courses` fetch URL should have a set of search params attached, where `courseType` is the name of key and its corresponding value.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams MDN - URLSearchParams}
 *
 * `fetchCourseEnrollments` returns a summary object with the following:
 * - `courses`: an array of course names and their respective enrolled student names.
 * - `courseCount`: the total number of courses processed.
 * - `studentCount`: the total number of students across all courses (do not count a student in two courses twice).
 *
 * @category 08 - Async/Await & APIs
 * @function fetchCourseEnrollments
 * @param {string?} [courseType] - Optional, either "mandatory" or "elective".
 * @returns {Promise<Object>} A summary of course enrollment details.
 *
 * @example
 * const allCourses = await fetchCourseEnrollments();
 * // returns enrollment data for all courses
 * {
 *   courses: [
 *     {
 *       courseName: "Mathematics 101",
 *       students: ["Alice Johnson", "Bob Smith"],
 *     }
 *   ],
 *   courses: 1,
 *   students: 2,
 * }
 *
 * // with an input, returns only "mandatory" courses
 * const mandatoryCourses = await fetchCourseEnrollments("mandatory");
 * // returns
 * {
 *   courses: [
 *     {
 *       courseName: "Mathematics 101",
 *       students: ["Alice Johnson", "Bob Smith"],
 *     },
 *     {
 *       courseName: "History of Science",
 *       students: ["John Doe"],
 *     },
 *   ],
 *   courses: 2,
 *   students: 3,
 * }
 */

// Use this to build your fetch URLs; do NOT delete.
export const BASE_URL = "http://localhost:3000";

export async function fetchCourseEnrollments(courseType) {
  if (courseType && courseType !== "mandatory" && courseType !== "elective") {
    throw new TypeError(
      "courseType must be 'mandatory', 'elective', or undefined."
    );
  }

  try {
    const coursesUrl =
      `${BASE_URL}/college/courses` +
      (courseType ? `?${new URLSearchParams({ courseType })}` : "");
    const studentsUrl = `${BASE_URL}/college/students`;

    const [coursesResponse, studentsResponse] = await Promise.all([
      await fetch(coursesUrl),
      await fetch(studentsUrl),
    ]);

    const coursesData = await coursesResponse.json();
    const studentsData = await studentsResponse.json();

    // Map students to their courses
    const allCourses = [];
    let totalStudents = new Set();

    for (const course of coursesData) {
      const enrolledStudents = studentsData
        .filter((student) => student.courses.includes(course.courseId))
        .map((student) => student.name);

      // Ensure we're only collecting student names we have NOT seen so far
      enrolledStudents.forEach((student) => {
        totalStudents.add(student);
      });

      // Collect all course data
      allCourses.push({
        courseName: course.courseName,
        students: enrolledStudents,
      });
    }

    // Construct the result object
    return {
      courses: allCourses,
      courseCount: allCourses.length,
      studentCount: totalStudents.size,
    };
  } catch (error) {
    console.error("Error fetching course enrollments:", error);
    throw error; // Re-throw for the caller to handle
  }
}
