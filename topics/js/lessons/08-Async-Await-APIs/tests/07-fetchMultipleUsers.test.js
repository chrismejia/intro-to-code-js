import { jest } from "@jest/globals";
import { fetchUser, fetchMultipleUsers } from "../07-fetchMultipleUsers.js";
import {
  validUserData,
  mockFetchUserSuccess,
  mockFetchUserFailure,
  passingUserIds,
  failingUserIds,
  expectedHeaders,
} from "../data/07-fetchMultipleUsers.data.js";

const userIdFromUrl = (url) => Number(url.split("/").pop());

xdescribe("fetchMultipleUsers", () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = jest.spyOn(globalThis, "fetch");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("fetchUser helper function", () => {
    describe("the `fetch` call", () => {
      it("should use the GET method explicitly", async () => {
        const userId = 1;

        fetchMock.mockImplementation((_, options) =>
          mockFetchUserSuccess(userId, options.headers)
        );

        await fetchUser(userId);

        expect(fetchMock).toHaveBeenCalledWith(
          expect.any(String),
          expect.objectContaining({ method: "GET" })
        );
      });

      it("should pass the correct headers", async () => {
        const userId = 1;
        const testUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

        fetchMock.mockImplementation((_, options) =>
          mockFetchUserSuccess(userId, options.headers)
        );

        await fetchUser(userId);

        expect(fetchMock).toHaveBeenCalledWith(
          testUrl,
          expect.objectContaining({ headers: expectedHeaders })
        );
      });
    });

    describe("data returned", () => {
      it("should fetch user data successfully for valid user ID", async () => {
        const userId = 1;
        const testUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

        fetchMock.mockImplementation((_, options) =>
          mockFetchUserSuccess(userId, options.headers)
        );

        const userData = await fetchUser(userId);

        expect(fetchMock).toHaveBeenCalledWith(testUrl, expect.any(Object));
        expect(userData).toEqual(validUserData[0]);
      });

      it("should throw an error for an invalid user ID", async () => {
        const userId = 9999;
        const testUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

        fetchMock.mockImplementation((_, options) =>
          mockFetchUserFailure(userId, options.headers)
        );

        await expect(fetchUser(userId)).rejects.toThrow(
          `Failed to fetch user with ID: ${userId}`
        );
        expect(fetchMock).toHaveBeenCalledWith(testUrl, expect.any(Object));
      });
    });
  });

  describe("fetchMultipleUsers function implementation", () => {
    it("should return all user's data if all fetches succeed", async () => {
      fetchMock.mockImplementation((url, options) =>
        mockFetchUserSuccess(userIdFromUrl(url), options.headers)
      );

      const result = await fetchMultipleUsers(passingUserIds);
      expect(result.successful).toEqual(validUserData);
      expect(result.failed).toEqual([]);
    });

    it("should return only failed user IDs if all fetches fail", async () => {
      fetchMock.mockImplementation((url, options) =>
        mockFetchUserFailure(userIdFromUrl(url), options.headers)
      );

      const result = await fetchMultipleUsers(failingUserIds);
      expect(result.successful).toEqual([]);
      expect(result.failed).toEqual(failingUserIds);
    });

    it("should return correct data for a mix of successes and failures", async () => {
      const mixedIds = [...passingUserIds, ...failingUserIds];

      fetchMock.mockImplementation((url, options) => {
        const userId = userIdFromUrl(url);
        return passingUserIds.includes(userId)
          ? mockFetchUserSuccess(userId, options.headers)
          : mockFetchUserFailure(userId, options.headers);
      });

      const result = await fetchMultipleUsers(mixedIds);
      expect(result.successful).toEqual(validUserData);
      expect(result.failed).toEqual(failingUserIds);
    });
  });
});
