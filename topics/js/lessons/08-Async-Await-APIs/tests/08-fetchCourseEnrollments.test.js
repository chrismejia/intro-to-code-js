import { jest } from "@jest/globals";
import { unit8Server } from "../server/server.js";
import {
  BASE_URL,
  fetchCourseEnrollments,
} from "../08-fetchCourseEnrollments.js";
import {
  allCoursesAns,
  electiveCoursesAns,
  mandatoryCoursesAns,
} from "../data/08-fetchCourseEnrollments.data.js";

const SERVER_PORT = 3001;
const OriginalURLSearchParams = globalThis.URLSearchParams;

const listen = (port) =>
  new Promise((resolve, reject) => {
    const listener = unit8Server.listen(port, () => resolve(listener));
    listener.once("error", reject);
  });

const close = (server) =>
  new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });

const emptyJsonResponse = () => ({
  ok: true,
  status: 200,
  json: jest.fn().mockResolvedValue([]),
});

const mockURLSearchParams = () => {
  const URLSearchParamsMock = jest.fn(function (...args) {
    return new OriginalURLSearchParams(...args);
  });

  URLSearchParamsMock.prototype = OriginalURLSearchParams.prototype;
  globalThis.URLSearchParams = URLSearchParamsMock;

  return URLSearchParamsMock;
};

jest.setTimeout(10000);

xdescribe("08 - fetchCourseEnrollments", () => {
  let server;

  beforeAll(async () => {
    server = await listen(SERVER_PORT);
  });

  afterAll(async () => {
    if (server?.listening) {
      await close(server);
    }
  });

  afterEach(() => {
    globalThis.URLSearchParams = OriginalURLSearchParams;
    jest.restoreAllMocks();
  });

  describe("General functionality", () => {
    it("should throw a TypeError if `courseType` is invalid", async () => {
      await expect(fetchCourseEnrollments("invalidType")).rejects.toThrow(
        TypeError,
      );
      await expect(fetchCourseEnrollments("invalidType")).rejects.toThrow(
        "courseType must be 'mandatory', 'elective', or undefined.",
      );
    });

    it("should return an object with keys `courses`, `courseCount`, `studentCount`, ", async () => {
      const allResults = await Promise.all([
        fetchCourseEnrollments(),
        fetchCourseEnrollments("elective"),
        fetchCourseEnrollments("mandatory"),
      ]);

      allResults.forEach((result) => {
        expect(result).toEqual(
          expect.objectContaining({
            courses: expect.any(Array),
            courseCount: expect.any(Number),
            studentCount: expect.any(Number),
          }),
        );
      });
    });
  });

  describe("All courses", () => {
    it("should call `fetch` twice with correct URL", async () => {
      const fetchMock = jest
        .spyOn(globalThis, "fetch")
        .mockResolvedValue(emptyJsonResponse());

      await fetchCourseEnrollments();

      const expectedUrls = [
        `${BASE_URL}/college/courses`,
        `${BASE_URL}/college/students`,
      ];

      expect(fetchMock.mock.calls.map(([url]) => url)).toEqual(
        expect.arrayContaining(expectedUrls),
      );
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });

    it("should return correct data for all courses", async () => {
      const result = await fetchCourseEnrollments();
      expect(result).toEqual(allCoursesAns);
    });
  });

  describe("Elective courses", () => {
    it("should call `fetch` twice with correct URLs and query params", async () => {
      const fetchMock = jest
        .spyOn(globalThis, "fetch")
        .mockResolvedValue(emptyJsonResponse());

      await fetchCourseEnrollments("elective");

      const expectedUrls = [
        `${BASE_URL}/college/courses?courseType=elective`,
        `${BASE_URL}/college/students`,
      ];

      expect(fetchMock.mock.calls.map(([url]) => url)).toEqual(
        expect.arrayContaining(expectedUrls),
      );
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });

    it("should return correct data for all courses", async () => {
      const result = await fetchCourseEnrollments("elective");
      expect(result).toEqual(electiveCoursesAns);
    });
  });

  describe("Mandatory courses", () => {
    it("should call `fetch` twice with correct URLs and query params", async () => {
      const fetchMock = jest
        .spyOn(globalThis, "fetch")
        .mockResolvedValue(emptyJsonResponse());

      await fetchCourseEnrollments("mandatory");

      const expectedUrls = [
        `${BASE_URL}/college/courses?courseType=mandatory`,
        `${BASE_URL}/college/students`,
      ];

      expect(fetchMock.mock.calls.map(([url]) => url)).toEqual(
        expect.arrayContaining(expectedUrls),
      );
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });

    it("should return correct data for mandatory courses", async () => {
      const result = await fetchCourseEnrollments("mandatory");
      expect(result).toEqual(mandatoryCoursesAns);
    });

    describe("BONUS", () => {
      describe("should only call URLSearchParams once only if courseType is a valid type", () => {
        it("no courseType -- no call", async () => {
          const URLSearchParamsMock = mockURLSearchParams();

          await fetchCourseEnrollments();

          expect(URLSearchParamsMock).not.toHaveBeenCalled();
        });

        it('"elective"', async () => {
          const URLSearchParamsMock = mockURLSearchParams();

          await fetchCourseEnrollments("elective");

          expect(URLSearchParamsMock).toHaveBeenCalledTimes(1);
        });

        it('"mandatory"', async () => {
          const URLSearchParamsMock = mockURLSearchParams();

          await fetchCourseEnrollments("mandatory");

          expect(URLSearchParamsMock).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
