export const loggedInUsers = [
  {
    isLoggedIn: true,
    preferredName: "Chris",
    username: "cmejia",
    expected: "Welcome, Chris!",
  },
  {
    isLoggedIn: true,
    preferredName: "",
    username: "cmejia",
    expected: "Welcome, cmejia!",
  },
  {
    isLoggedIn: true,
    preferredName: "",
    username: "",
    expected: "Welcome, Guest!",
  },
];

export const loggedOutUsers = [
  {
    isLoggedIn: false,
    preferredName: "Chris",
    username: "cmejia",
  },
  {
    isLoggedIn: false,
    preferredName: "",
    username: "",
  },
];
