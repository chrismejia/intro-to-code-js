/**
 * 08 - fetchCourseEnrollments
 *
 * `fetchCourseEnrollments` retrieves enrollment details for courses based on their type.
 * `fetchCourseEnrollments` accepts one optional input, `courseType`, which can be either "mandatory" or "elective".
 *
 * - When `courseType` is "mandatory": fetches enrollment data for all mandatory courses.
 * - When `courseType` is "elective": fetches enrollment data for all elective courses.
 * - When `courseType` is not provided: fetches enrollment data for all courses.
 *
 * It fetches course data from `/courses` and student enrollment data from `/students`.
 * `fetchCourseEnrollments` returns a summary object with the following:
 * - `courses`: an array of course names and their respective enrolled student names.
 * - `courseCount`: the total number of courses processed.
 * - `studentCount`: the total number of students across all courses.
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
 *   allCourses: [
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
 *   allCourses: [
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
export async function fetchCourseEnrollments(courseType) {
  if (courseType && courseType !== "mandatory" && courseType !== "elective") {
    throw new TypeError(
      "courseType must be 'mandatory', 'elective', or undefined."
    );
  }

  try {
    // Fetch all courses
    const coursesResponse = await fetch(
      `/courses` + courseType ? new URLSearchParams({ courseType }) : ""
    );

    if (!coursesResponse.ok) {
      throw new Error(`Failed to fetch courses: ${coursesResponse.statusText}`);
    }
    const coursesData = await coursesResponse.json();

    // Filter courses by type if provided
    const filteredCourses = courseType
      ? coursesData.filter((course) => course.type === courseType)
      : coursesData;

    // Fetch all students
    const studentsResponse = await fetch(`/students`);
    if (!studentsResponse.ok) {
      throw new Error(
        `Failed to fetch students: ${studentsResponse.statusText}`
      );
    }
    const studentsData = await studentsResponse.json();

    // Map students to their courses
    const allCourses = [];
    let totalStudents = 0;

    for (const course of filteredCourses) {
      const enrolledStudents = studentsData
        .filter((student) => student.courseId === course.id)
        .map((student) => student.name);

      allCourses.push({
        courseName: course.name,
        students: enrolledStudents,
      });
      totalStudents += enrolledStudents.length;
    }

    // Construct the result object
    return {
      courses: allCourses,
      courseCount: allCourses.length,
      studentCount: totalStudents,
    };
  } catch (error) {
    console.error("Error fetching course enrollments:", error);
    throw error; // Re-throw for the caller to handle
  }
}
