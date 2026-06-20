/**
 * #8: classSorter
 *
 * `classSorter` sorts a roster of students and teachers into classes based on their grades.
 * `classSorter` accepts a roster object containing students and teachers, and sorts them into classes based on their grades.
 *
 * `classSorter` returns an object with grades as keys, each containing an array of student names and an array of teacher names for that grade.
 *
 * @category 07 - Adv Objects
 * @function classSorter
 * @param {Object} roster - The roster object containing arrays of students and teachers.
 * @param {Array} roster.students - Array of student objects.
 * @param {Array} roster.teachers - Array of teacher objects.
 * @param {Object} roster.students[].name - The name of the student.
 * @param {number} roster.students[].grade - The grade of the student.
 * @param {Object} roster.teachers[].name - The name of the teacher.
 * @param {number} roster.teachers[].grade - The grade the teacher teaches.
 * @returns {Object} - An object where keys are grades and values are objects containing arrays of student and teacher names.
 *
 * @example
 * const roster = {
 *  students: [
 *     { name: "Abigail Danielski", grade: 7 },
 *     { name: "Theresina Simeons", grade: 7 },
 *     { name: "Riobard Schanke", grade: 7 },
 *   ],
 *  teachers: [{ name: "Joby Bulloch", grade: 7 }],
 * };
 *
 * const sortedClass = classSorter(roster)
 * console.log(sortedClass)
 * {
 *   7: {
 *     students: ["Abigail Danielski", "Theresina Simeons", "Riobard Schanke"],
 *     teachers: ["Joby Bulloch"],
 *   },
 * };
 */

/**
 * Two consecutive loop solutions
 */
export function classSorter(roster) {
  const classes = {};

  const { students, teachers } = roster;

  for (const { name, grade } of students) {
    if (!(grade in classes)) {
      classes[grade] = { students: [name], teachers: [] };
    } else {
      classes[grade].students.push(name);
    }
  }

  for (const { name, grade } of teachers) {
    if (!(grade in classes)) {
      classes[grade] = { students: [], teachers: [name] };
    } else {
      classes[grade].teachers.push(name);
    }
  }

  return classes;
}

/**
 * One large loop solution
 *
 * Combined Loop: By spreading students and teachers into a single array, we can loop through them once. To differentiate between students and teachers in the combined loop, a role property is added to teacher objects.
 * Initialize classes Once per Grade: Initialization of the classes object for each grade happens only once, making the function more efficient.
 * Object Spread: Uses object spread syntax to add the role property to teacher objects, ensuring that we can easily differentiate between students and teachers within a single loop.
 */
// export function classSorter(roster) {
//   const classes = {};

//   const { students, teachers } = roster;

//   for (const { name, grade, role } of [
//     ...students,
//     ...teachers.map((teacher) => ({ ...teacher, role: "teacher" })),
//   ]) {
//     if (!(grade in classes)) {
//       classes[grade] = { students: [], teachers: [] };
//     }
//     if (role === "teacher") {
//       classes[grade].teachers.push(name);
//     } else {
//       classes[grade].students.push(name);
//     }
//   }

//   return classes;
// }

/**
 * One-liner explanation
 * Steps:
 * 1. Mapping with Type: We first map over both `students` and `teachers`, adding a `type` property to distinguish between them.
 *    This results in a single array containing both students and teachers with an additional `type` property.
 * 2. Combining Arrays: We then spread both mapped arrays into a single array using the spread operator `[...]`.
 * 3. Reducing: We use the `reduce` method to transform this array into the desired structure:
 *    - Initialize Classes: If a grade key does not exist in the `classes` object, we initialize it with empty `students` and `teachers` arrays.
 *    - Push Names: Based on the `type` property, we push the `name` into either the `students` or `teachers` array for the corresponding grade.
 * 4. Return: The `reduce` method ultimately returns the `classes` object with the desired structure.
 */
// export const classSorter = (roster) =>
//   [
//     ...roster.students.map((s) => ({ ...s, type: "student" })),
//     ...roster.teachers.map((t) => ({ ...t, type: "teacher" })),
//   ].reduce((classes, { name, grade, type }) => {
//     if (!classes[grade]) classes[grade] = { students: [], teachers: [] };
//     classes[grade][type === "student" ? "students" : "teachers"].push(name);
//     return classes;
//   }, {});
