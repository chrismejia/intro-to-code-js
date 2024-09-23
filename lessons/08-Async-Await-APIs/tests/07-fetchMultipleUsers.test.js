import { expect } from "chai";
import { fetchUser, fetchMultipleUsers } from "../07-fetchMultipleUsers";
import {
  validUserData,
  mockFetchUserSuccess,
  mockFetchUserFailure,
  userIds,
} from "../data/07-fetchMultipleUsers.data";

describe("fetchMultipleUsers", function () {
  this.timeout(5000);

  describe("fetchUser helper function", () => {
    afterEach(() => {
      global.fetch = null; // Cleanup
    });

    it("should fetch user data successfully for valid user ID", async () => {
      global.fetch = (url) => {
        const userId = parseInt(url.split("/").pop());
        return mockFetchUserSuccess(userId);
      };

      const userId = 1;

      // Checks if the fetch was successful and returns user data directly
      const userData = await fetchUser(userId);
      expect(userData).to.deep.equal(validUserData[0]);
    });

    it("should throw an error for an invalid user ID", async () => {
      global.fetch = (url) => {
        const userId = parseInt(url.split("/").pop());
        return mockFetchUserFailure(userId);
      };

      const userId = 99;
      // Checks if the fetch throws an error
      try {
        await fetchUser(userId);
      } catch (error) {
        expect(error.message).to.equal(
          `Failed to fetch user with ID: ${userId}`
        );
      }
    });
  });

  describe("fetchMultipleUsers implementation", () => {
    beforeEach(() => {
      global.fetch = (url) => {
        const userId = parseInt(url.split("/").pop());
        return userId <= validUserData.length
          ? mockFetchUserSuccess(userId)
          : mockFetchUserFailure(userId);
      };
    });

    afterEach(() => {
      global.fetch = null; // Clean up
    });

    it("should return all user's data if all fetches succeed", async function () {
      const allSuccessfulIds = [1, 2];

      const result = await fetchMultipleUsers(allSuccessfulIds);
      expect(result.successful).to.deep.equal(validUserData);
      expect(result.failed).to.deep.equal([]);
    });

    it("should return only failed user IDs if all fetches fail", async function () {
      const allFailedIds = [3, 4, 5];
      const result = await fetchMultipleUsers(allFailedIds);

      expect(result.successful).to.deep.equal([]);
      expect(result.failed).to.deep.equal(allFailedIds);
    });

    it("should return correct data for a mix of successes and failures", async function () {
      const result = await fetchMultipleUsers(userIds);

      expect(result.successful).to.deep.equal(validUserData);
      expect(result.failed).to.deep.equal([3]);
    });
  });
});
