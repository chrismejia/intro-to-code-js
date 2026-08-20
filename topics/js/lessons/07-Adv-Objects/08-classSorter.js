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

export function classSorter() {}
