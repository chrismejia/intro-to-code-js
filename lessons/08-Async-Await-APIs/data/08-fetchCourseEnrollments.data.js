export const courses = [
  {
    id: 1,
    courseName: "Introduction to Psychology",
    isActive: "Psychology",
    type: "elective",
  },
  {
    id: 2,
    courseName: "English Composition",
    isActive: "English",
    type: "mandatory",
  },
  {
    id: 3,
    courseName: "Introduction to Sociology",
    isActive: "Sociology",
    type: "mandatory",
  },
  {
    id: 4,
    courseName: "Calculus I",
    isActive: "Mathematics",
    type: "elective",
  },
  {
    id: 5,
    courseName: "Biology 101",
    isActive: "Biology",
    type: "elective",
  },
  {
    id: 6,
    courseName: "History of Art",
    isActive: "Art History",
    type: "elective",
  },
  {
    id: 7,
    courseName: "Introduction to Computer Science",
    isActive: "Computer Science",
    type: "elective",
  },
  {
    id: 8,
    courseName: "Chemistry 101",
    isActive: "Chemistry",
    type: "mandatory",
  },
  {
    id: 9,
    courseName: "Microeconomics",
    isActive: "Economics",
    type: "elective",
  },
  {
    id: 10,
    courseName: "Spanish 101",
    isActive: "Spanish",
    type: "elective",
  },
];

export const students = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@aeterna.edu",
    major: "Psychology",
    year: "Sophomore",
    courses: [1, 2, 3, 4],
  }, // Enrolled in foundational courses for Psychology and general education requirements.
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@aeterna.edu",
    major: "Computer Science",
    year: "Junior",
    courses: [2, 12, 14, 15],
  }, // Advanced Mathematics, Physics, and core CS courses.
  {
    id: 3,
    name: "Clara Martinez",
    email: "clara.martinez@aeterna.edu",
    major: "Philosophy",
    year: "Senior",
    courses: [10, 18, 6, 5],
  }, // Ethics, Philosophy, and interdisciplinary electives like History and Sociology.
  {
    id: 4,
    name: "David Lee",
    email: "david.lee@aeterna.edu",
    major: "Biology",
    year: "Freshman",
    courses: [4, 9, 3, 11],
  }, // Basic sciences and Mathematics, preparing for future advanced Biology.
  {
    id: 5,
    name: "Emma Brown",
    email: "emma.brown@aeterna.edu",
    major: "Business",
    year: "Sophomore",
    courses: [7, 17, 8, 19],
  }, // Core Business courses with electives in Public Speaking and Environmental Science.

  {
    id: 6,
    name: "Frank White",
    email: "frank.white@aeterna.edu",
    major: "History",
    year: "Junior",
    courses: [6, 5, 3, 13],
  }, // History major with Art History and foundational Sociology.
  {
    id: 7,
    name: "Grace Kim",
    email: "grace.kim@aeterna.edu",
    major: "Environmental Science",
    year: "Sophomore",
    courses: [19, 4, 9, 11],
  }, // Interdisciplinary courses related to Biology and Chemistry.
  {
    id: 8,
    name: "Henry Clark",
    email: "henry.clark@aeterna.edu",
    major: "Economics",
    year: "Senior",
    courses: [7, 12, 14, 17],
  }, // Advanced Economics and Business courses with Mathematics support.
  {
    id: 9,
    name: "Ivy Torres",
    email: "ivy.torres@aeterna.edu",
    major: "Art",
    year: "Sophomore",
    courses: [13, 10, 6, 3],
  }, // Art History and electives in Philosophy and History.
  {
    id: 10,
    name: "Jack Lopez",
    email: "jack.lopez@aeterna.edu",
    major: "Physics",
    year: "Junior",
    courses: [15, 12, 3, 9],
  }, // Core Physics and supporting Mathematics and Chemistry courses.

  {
    id: 11,
    name: "Kelly Green",
    email: "kelly.green@aeterna.edu",
    major: "English",
    year: "Freshman",
    courses: [2, 6, 3, 5],
  }, // General education courses with emphasis on writing and Sociology.
  {
    id: 12,
    name: "Liam Hall",
    email: "liam.hall@aeterna.edu",
    major: "Political Science",
    year: "Senior",
    courses: [16, 7, 6, 10],
  }, // Political Science core with supporting Economics and History.
  {
    id: 13,
    name: "Mia Nelson",
    email: "mia.nelson@aeterna.edu",
    major: "Languages",
    year: "Junior",
    courses: [20, 2, 6, 18],
  }, // Spanish I with Philosophy and general English and History courses.
  {
    id: 14,
    name: "Noah Scott",
    email: "noah.scott@aeterna.edu",
    major: "Mathematics",
    year: "Sophomore",
    courses: [12, 11, 3, 9],
  }, // Focused on advanced Math and foundational sciences.
  {
    id: 15,
    name: "Olivia Rivera",
    email: "olivia.rivera@aeterna.edu",
    major: "Psychology",
    year: "Senior",
    courses: [1, 5, 10, 19],
  }, // Advanced Psychology with Philosophy and Environmental Science electives.

  {
    id: 16,
    name: "Paul Adams",
    email: "paul.adams@aeterna.edu",
    major: "Philosophy",
    year: "Junior",
    courses: [10, 18, 6, 15],
  }, // Focused on core Philosophy and interdisciplinary Physics.
  {
    id: 17,
    name: "Quinn Baker",
    email: "quinn.baker@aeterna.edu",
    major: "Business",
    year: "Senior",
    courses: [7, 17, 8, 14],
  }, // Business-oriented coursework with Communication and Computer Science.
  {
    id: 18,
    name: "Ruby Carter",
    email: "ruby.carter@aeterna.edu",
    major: "Sociology",
    year: "Sophomore",
    courses: [5, 6, 2, 19],
  }, // Sociology major with Environmental Science elective.
  {
    id: 19,
    name: "Samuel Diaz",
    email: "samuel.diaz@aeterna.edu",
    major: "Computer Science",
    year: "Senior",
    courses: [14, 12, 9, 3],
  }, // Advanced CS coursework with Mathematics and foundational Chemistry.
  {
    id: 20,
    name: "Taylor Evans",
    email: "taylor.evans@aeterna.edu",
    major: "Environmental Science",
    year: "Junior",
    courses: [19, 4, 15, 6],
  }, // Advanced Environmental Science with Physics and History.

  {
    id: 21,
    name: "Uma Foster",
    email: "uma.foster@aeterna.edu",
    major: "Languages",
    year: "Freshman",
    courses: [20, 13, 2, 5],
  }, // Spanish I with introductory Art History and Sociology.
  {
    id: 22,
    name: "Victor Garcia",
    email: "victor.garcia@aeterna.edu",
    major: "Biology",
    year: "Junior",
    courses: [4, 9, 15, 12],
  }, // Advanced Biology and supporting sciences and Mathematics.
  {
    id: 23,
    name: "Wendy Hill",
    email: "wendy.hill@aeterna.edu",
    major: "Political Science",
    year: "Senior",
    courses: [16, 7, 18, 2],
  }, // Political Science major with Philosophy and Economics.
  {
    id: 24,
    name: "Xander Knight",
    email: "xander.knight@aeterna.edu",
    major: "History",
    year: "Junior",
    courses: [6, 5, 10, 18],
  }, // History with electives in Philosophy and Sociology.
  {
    id: 25,
    name: "Yara Lewis",
    email: "yara.lewis@aeterna.edu",
    major: "English",
    year: "Sophomore",
    courses: [2, 6, 13, 10],
  }, // Focused on writing and Literature with Art History.

  {
    id: 26,
    name: "Zach Miller",
    email: "zach.miller@aeterna.edu",
    major: "Physics",
    year: "Junior",
    courses: [15, 12, 9, 4],
  }, // Advanced Physics and foundational Biology and Chemistry.
  {
    id: 27,
    name: "Anna Brooks",
    email: "anna.brooks@aeterna.edu",
    major: "Philosophy",
    year: "Senior",
    courses: [10, 18, 6, 5],
  }, // Core Philosophy and interdisciplinary electives.
  {
    id: 28,
    name: "Ben Taylor",
    email: "ben.taylor@aeterna.edu",
    major: "Economics",
    year: "Junior",
    courses: [7, 12, 14, 11],
  }, // Core Economics and Mathematics with Computer Science.
  {
    id: 29,
    name: "Carmen Ramirez",
    email: "carmen.ramirez@aeterna.edu",
    major: "Business",
    year: "Sophomore",
    courses: [7, 17, 19, 8],
  }, // Business coursework with electives in Communication.
  {
    id: 30,
    name: "Dylan Morgan",
    email: "dylan.morgan@aeterna.edu",
    major: "Art",
    year: "Junior",
    courses: [13, 6, 5, 18],
  }, // Art History with Philosophy and Sociology electives.
];
