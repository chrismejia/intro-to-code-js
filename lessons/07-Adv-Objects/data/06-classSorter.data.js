export const emptyRoster = { students: [], teachers: [] };

export const onlyStudentsRoster = {
  students: [
    { name: "Abigail Danielski", grade: 7 },
    { name: "Theresina Simeons", grade: 7 },
    { name: "Riobard Schanke", grade: 7 },
  ],
  teachers: [],
};

export const onlyStudentsExpected = {
  7: {
    students: ["Abigail Danielski", "Theresina Simeons", "Riobard Schanke"],
    teachers: [],
  },
};

export const onlyTeachersRoster = {
  students: [],
  teachers: [{ name: "Joby Bulloch", grade: 7 }],
};

export const onlyTeachersExpected = {
  7: {
    students: [],
    teachers: ["Joby Bulloch"],
  },
};

export const oneGradeSaTRoster = {
  students: [
    { name: "Abigail Danielski", grade: 7 },
    { name: "Theresina Simeons", grade: 7 },
    { name: "Riobard Schanke", grade: 7 },
  ],
  teachers: [{ name: "Joby Bulloch", grade: 7 }],
};

export const oneGradeSaTExpected = {
  7: {
    students: ["Abigail Danielski", "Theresina Simeons", "Riobard Schanke"],
    teachers: ["Joby Bulloch"],
  },
};

export const twoGradeSaTRoster = {
  students: [
    { name: "Abigail Danielski", grade: 7 },
    { name: "Theresina Simeons", grade: 8 },
    { name: "Riobard Schanke", grade: 8 },
  ],
  teachers: [
    { name: "Joby Bulloch", grade: 7 },
    { name: "Another Teacher", grade: 8 },
  ],
};

export const twoGradeSaTExpected = {
  7: {
    students: ["Abigail Danielski"],
    teachers: ["Joby Bulloch"],
  },
  8: {
    students: ["Theresina Simeons", "Riobard Schanke"],
    teachers: ["Another Teacher"],
  },
};

export const multipleGradeSaTRoster = {
  students: [
    {
      name: "Oswell Leppo",
      grade: 9,
    },
    {
      name: "Cully Vallintine",
      grade: 10,
    },
    {
      name: "Rene Canete",
      grade: 11,
    },
    {
      name: "Hewitt Cortes",
      grade: 12,
    },
    {
      name: "Lynnet Munday",
      grade: 9,
    },
    {
      name: "Fredericka Aldis",
      grade: 10,
    },
    {
      name: "Susana Sinnocke",
      grade: 11,
    },
    {
      name: "Antoine Curro",
      grade: 12,
    },
    {
      name: "Ambrosi Eddington",
      grade: 9,
    },
    {
      name: "Maynord Maureen",
      grade: 10,
    },
    {
      name: "Shellysheldon Massingham",
      grade: 11,
    },
    {
      name: "Armstrong Gerrell",
      grade: 12,
    },
  ],
  teachers: [
    {
      name: "Lurline Albury",
      grade: 9,
    },
    {
      name: "Maridel Giriardelli",
      grade: 10,
    },
    {
      name: "Mohandas Basillon",
      grade: 11,
    },
    {
      name: "Say Siggs",
      grade: 12,
    },
  ],
};

export const multipleGradeSaTExpected = {
  9: {
    students: ["Oswell Leppo", "Lynnet Munday", "Ambrosi Eddington"],
    teachers: ["Lurline Albury"],
  },
  10: {
    students: ["Cully Vallintine", "Fredericka Aldis", "Maynord Maureen"],
    teachers: ["Maridel Giriardelli"],
  },
  11: {
    students: ["Rene Canete", "Susana Sinnocke", "Shellysheldon Massingham"],
    teachers: ["Mohandas Basillon"],
  },
  12: {
    students: ["Hewitt Cortes", "Antoine Curro", "Armstrong Gerrell"],
    teachers: ["Say Siggs"],
  },
};
