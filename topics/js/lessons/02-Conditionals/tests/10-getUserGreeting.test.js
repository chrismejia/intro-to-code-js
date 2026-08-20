import { getUserGreeting } from "../index.js";
import {
  loggedInUsers,
  loggedOutUsers,
} from "../data/10-getUserGreeting.data.js";

/**
 * Remove the `x` from `xdescribe` after the previous exercise passes.
 * Run `npm run test:02` from the repo root after each change.
 */

xdescribe("#10: getUserGreeting", () => {
  it("uses the first available name for logged-in users", () => {
    loggedInUsers.forEach(
      ({ isLoggedIn, preferredName, username, expected }) => {
        expect(getUserGreeting(isLoggedIn, preferredName, username)).toBe(
          expected,
        );
      },
    );
  });

  it("asks logged-out users to log in regardless of available names", () => {
    loggedOutUsers.forEach(({ isLoggedIn, preferredName, username }) => {
      expect(getUserGreeting(isLoggedIn, preferredName, username)).toBe(
        "Please log in.",
      );
    });
  });
});
