// topics/js is an ESM workspace. Keep transforms disabled and run Jest through
// `node --experimental-vm-modules` so tests execute the lesson files as native
// ECMAScript modules during the migration.
module.exports = {
  clearMocks: true,
  restoreMocks: true,
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/*.test.js"],
  transform: {},
};
