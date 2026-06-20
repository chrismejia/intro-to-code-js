import { expect } from "chai";
import sinon from "sinon";
import { fetchUser, fetchMultipleUsers } from "../07-fetchMultipleUsers";
import {
  validUserData,
  mockFetchUserSuccess,
  mockFetchUserFailure,
  passingUserIds,
  failingUserIds,
  expectedHeaders,
} from "../data/07-fetchMultipleUsers.data";

describe("fetchMultipleUsers", function () {
  this.timeout(10000);

  let fetchStub;

  beforeEach(() => {
    // Create a fetch stub using sinon
    fetchStub = sinon.stub(global, "fetch");
  });

  afterEach(() => {
    // Restore the fetch function after each test
    fetchStub.restore();
  });

  describe("fetchUser helper function", () => {
    describe("the `fetch` call", () => {
      it("should use the GET method explicitly", async () => {
        const userId = 1;

        // Stub the successful fetch call
        fetchStub
          .withArgs(sinon.match.string, sinon.match.object) // Match any URL and an options object, since this test is just checking the method
          .callsFake((_, options) => {
            // Ensure that the method is explicitly set to 'GET'
            expect(options.method).to.equal("GET");
            return mockFetchUserSuccess(userId, options.headers);
          });

        // Call the function
        await fetchUser(userId);
      });

      it("should pass the correct headers", async () => {
        const userId = 1;

        // Stub the successful fetch call
        fetchStub
          .withArgs(
            `https://jsonplaceholder.typicode.com/users/${userId}`,
            sinon.match.object
          )
          .callsFake((_, options) => {
            // Verify the headers being passed
            expect(options.headers).to.deep.equal(expectedHeaders);
            return mockFetchUserSuccess(userId, options.headers);
          });

        // Call the function
        await fetchUser(userId);
      });
    });

    describe("data returned", () => {
      it("should fetch user data successfully for valid user ID", async () => {
        const userId = 1;
        const testUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

        // The options parameter in the stub is the same options object that the student provides when calling fetch in their implementation.
        /// When the fetch function is called within fetchUser, it sends this options object along with the URL.
        fetchStub
          .withArgs(testUrl)
          .callsFake((_, options) =>
            mockFetchUserSuccess(userId, options.headers)
          );

        const userData = await fetchUser(userId);

        expect(userData).to.deep.equal(validUserData[0]);
      });

      it("should throw an error for an invalid user ID", async () => {
        const userId = 9999;
        const testUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

        // The options parameter in the stub is the same options object that the student provides when calling fetch in their implementation.
        /// When the fetch function is called within fetchUser, it sends this options object along with the URL.
        fetchStub
          .withArgs(testUrl)
          .callsFake((_, options) =>
            mockFetchUserFailure(userId, options.headers)
          );

        try {
          await fetchUser(userId);
        } catch (error) {
          expect(error.message).to.equal(
            `Failed to fetch user with ID: ${userId}`
          );
        }
      });
    });
  });

  describe("fetchMultipleUsers function implementation", () => {
    it("should return all user's data if all fetches succeed", async () => {
      // Stub the successful fetch calls
      passingUserIds.forEach((id) => {
        const testUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

        fetchStub
          .withArgs(testUrl)
          .callsFake((_, options) => mockFetchUserSuccess(id, options.headers));
      });

      // Call the function and check the result
      const result = await fetchMultipleUsers(passingUserIds);
      expect(result.successful).to.deep.equal(validUserData);
      expect(result.failed).to.deep.equal([]);
    });

    it("should return only failed user IDs if all fetches fail", async () => {
      // Stub the failed fetch calls
      failingUserIds.forEach((id) => {
        const testUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

        fetchStub
          .withArgs(testUrl)
          .callsFake((_, options) => mockFetchUserFailure(id, options.headers));
      });

      // Call the function and check the result
      const result = await fetchMultipleUsers(failingUserIds);
      expect(result.successful).to.deep.equal([]);
      expect(result.failed).to.deep.equal(failingUserIds);
    });

    it("should return correct data for a mix of successes and failures", async () => {
      const mixedIds = [...passingUserIds, ...failingUserIds];

      // Stub success calls
      passingUserIds.forEach((id) => {
        const testUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

        fetchStub
          .withArgs(testUrl)
          .callsFake((url, options) =>
            mockFetchUserSuccess(id, options.headers)
          );
      });

      // Stub failure calls
      failingUserIds.forEach((id) => {
        const testUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

        fetchStub
          .withArgs(testUrl)
          .callsFake((_, options) => mockFetchUserFailure(id, options.headers));
      });

      // Call the function and check the result
      const result = await fetchMultipleUsers(mixedIds);
      expect(result.successful).to.deep.equal(validUserData);
      expect(result.failed).to.deep.equal(failingUserIds);
    });
  });
});
