<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
import { jest } from "@jest/globals";
import { unit8Server } from "../server/server.js";
import { BASE_URL, fetchCourseEnrollments } from "../08-fetchCourseEnrollments.js";
=======
import sinon from "sinon";
import { expect } from "chai";
import { unit8Server } from "../server/server";
import { BASE_URL, fetchCourseEnrollments } from "../08-fetchCourseEnrollments";
>>>>>>> dev:lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
import {
  allCoursesAns,
  electiveCoursesAns,
  mandatoryCoursesAns,
<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
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

describe("08 - fetchCourseEnrollments", () => {
  let server;

  beforeAll(async () => {
    server = await listen(SERVER_PORT);
  });

  afterAll(async () => {
    if (server?.listening) {
      await close(server);
=======
} from "../data/08-fetchCourseEnrollments.data";

describe.only("08 - fetchCourseEnrollments", function () {
  let server;

  // Start the server before running the tests
  before((done) => {
    function startServer(port) {
      server = unit8Server.listen(port, () => {
        console.log(`\n  == Unit 8 Server started on port ${port} ==`);
        console.log(`  BASE_URL: 'http://localhost:3001'\n`);
        done();
      });

      server.on("error", (err) => {
        if (err.code === "EADDRINUSE") {
          console.log(`Port ${port} in use, trying another port...`);
          startServer(port + 1); // Try a different port
        } else {
          done(err); // Propagate other errors
        }
      });
    }

    startServer(3001); // Start on port 3001 first
  });

  // Close the server after all tests have run
  after((done) => {
    if (server) {
      server.close(() => {
        done();
        setTimeout(() => {
          console.log("  == Unit 8 Server shutdown ==");
          process.exit(0);
        }, 1000);
      });
>>>>>>> dev:lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
    }
  });

  afterEach(() => {
<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
    globalThis.URLSearchParams = OriginalURLSearchParams;
    jest.restoreAllMocks();
  });

  describe("General functionality", () => {
    it("should throw a TypeError if `courseType` is invalid", async () => {
      await expect(fetchCourseEnrollments("invalidType")).rejects.toThrow(
        TypeError
      );
      await expect(fetchCourseEnrollments("invalidType")).rejects.toThrow(
        "courseType must be 'mandatory', 'elective', or undefined."
      );
=======
    sinon.restore();
  });

  describe("General functionality", () => {
    it("should throw a TypeError if `courseType` is invalid", function (done) {
      fetchCourseEnrollments("invalidType")
        .then(() => {
          done(new Error("Promise should have been rejected"));
        })
        .catch((err) => {
          expect(err).to.be.instanceOf(TypeError);
          expect(err.message).to.equal(
            "courseType must be 'mandatory', 'elective', or undefined."
          );
          done(); // Finish the test when the error is caught
        });
>>>>>>> dev:lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
    });

    it("should return an object with keys `courses`, `courseCount`, `studentCount`, ", async () => {
      const allResults = await Promise.all([
        fetchCourseEnrollments(),
        fetchCourseEnrollments("elective"),
        fetchCourseEnrollments("mandatory"),
      ]);

      allResults.forEach((result) => {
<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
        expect(result).toEqual(
          expect.objectContaining({
            courses: expect.any(Array),
            courseCount: expect.any(Number),
            studentCount: expect.any(Number),
          })
        );
=======
        expect(result).to.be.an("object");
        expect(result).to.have.property("courses");
        expect(result).to.have.property("courseCount");
        expect(result).to.have.property("studentCount");
>>>>>>> dev:lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
      });
    });
  });

  describe("All courses", () => {
<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
    it("should call `fetch` twice with correct URL", async () => {
      const fetchMock = jest
        .spyOn(globalThis, "fetch")
        .mockResolvedValue(emptyJsonResponse());

      await fetchCourseEnrollments();

=======
    it("should call `fetch` twice with correct URL", async function () {
      const fetchStub = sinon.stub(global, "fetch");

      // Mock the response for the first call
      fetchStub.onCall(0).resolves({
        json: () => Promise.resolve([]), // Mock a 200 response with empty array
      });

      // Mock the response for the second call
      fetchStub.onCall(1).resolves({
        json: () => Promise.resolve([]), // Mock a 200 response with empty array
      });

      await fetchCourseEnrollments();

      const calledUrls = [
        fetchStub.firstCall.args[0],
        fetchStub.secondCall.args[0],
      ];

>>>>>>> dev:lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
      const expectedUrls = [
        `${BASE_URL}/college/courses`,
        `${BASE_URL}/college/students`,
      ];

<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
      expect(fetchMock.mock.calls.map(([url]) => url)).toEqual(
        expect.arrayContaining(expectedUrls)
      );
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });

    it("should return correct data for all courses", async () => {
      const result = await fetchCourseEnrollments();
      expect(result).toEqual(allCoursesAns);
=======
      // Check if both URLs are called, regardless of the order
      expect(calledUrls).to.include.members(expectedUrls);
      expect(fetchStub.calledTwice).to.be.true;
    });

    it("should return correct data for all courses", async function () {
      const result = await fetchCourseEnrollments();
      expect(result).to.deep.equal(allCoursesAns);
>>>>>>> dev:lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
    });
  });

  describe("Elective courses", () => {
<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
    it("should call `fetch` twice with correct URLs and query params", async () => {
      const fetchMock = jest
        .spyOn(globalThis, "fetch")
        .mockResolvedValue(emptyJsonResponse());

      await fetchCourseEnrollments("elective");

=======
    it("should call `fetch` twice with correct URLs and query params", async function () {
      const fetchStub = sinon.stub(global, "fetch");

      // Mock the response for the first call
      fetchStub.onCall(0).resolves({
        json: () => Promise.resolve([]), // Mock a 200 response with empty array
      });

      // Mock the response for the second call
      fetchStub.onCall(1).resolves({
        json: () => Promise.resolve([]), // Mock a 200 response with empty array
      });

      await fetchCourseEnrollments("elective");

      const calledUrls = [
        fetchStub.firstCall.args[0],
        fetchStub.secondCall.args[0],
      ];

>>>>>>> dev:lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
      const expectedUrls = [
        `${BASE_URL}/college/courses?courseType=elective`,
        `${BASE_URL}/college/students`,
      ];

<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
      expect(fetchMock.mock.calls.map(([url]) => url)).toEqual(
        expect.arrayContaining(expectedUrls)
      );
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });

    it("should return correct data for all courses", async () => {
      const result = await fetchCourseEnrollments("elective");
      expect(result).toEqual(electiveCoursesAns);
=======
      // Check if both URLs are called, regardless of the order
      expect(calledUrls).to.include.members(expectedUrls);
      expect(fetchStub.calledTwice).to.be.true;
    });

    it("should return correct data for all courses", async function () {
      const result = await fetchCourseEnrollments("elective");
      expect(result).to.deep.equal(electiveCoursesAns);
>>>>>>> dev:lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
    });
  });

  describe("Mandatory courses", () => {
<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
    it("should call `fetch` twice with correct URLs and query params", async () => {
      const fetchMock = jest
        .spyOn(globalThis, "fetch")
        .mockResolvedValue(emptyJsonResponse());

      await fetchCourseEnrollments("mandatory");

=======
    it("should call `fetch` twice with correct URLs and query params", async function () {
      const fetchStub = sinon.stub(global, "fetch");

      // Mock the response for the first call
      fetchStub.onCall(0).resolves({
        json: () => Promise.resolve([]), // Mock a 200 response with empty array
      });

      // Mock the response for the second call
      fetchStub.onCall(1).resolves({
        json: () => Promise.resolve([]), // Mock a 200 response with empty array
      });

      await fetchCourseEnrollments("mandatory");

      const calledUrls = [
        fetchStub.firstCall.args[0],
        fetchStub.secondCall.args[0],
      ];

>>>>>>> dev:lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
      const expectedUrls = [
        `${BASE_URL}/college/courses?courseType=mandatory`,
        `${BASE_URL}/college/students`,
      ];

<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
      expect(fetchMock.mock.calls.map(([url]) => url)).toEqual(
        expect.arrayContaining(expectedUrls)
      );
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });

    it("should return correct data for mandatory courses", async () => {
      const result = await fetchCourseEnrollments("mandatory");
      expect(result).toEqual(mandatoryCoursesAns);
=======
      // Check if both URLs are called, regardless of the order
      expect(calledUrls).to.include.members(expectedUrls);
      expect(fetchStub.calledTwice).to.be.true;
    });

    it("should return correct data for mandatory courses", async function () {
      const result = await fetchCourseEnrollments("mandatory");
      expect(result).to.deep.equal(mandatoryCoursesAns);
>>>>>>> dev:lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
    });

    describe("BONUS", () => {
      describe("should only call URLSearchParams once only if courseType is a valid type", () => {
        it("no courseType -- no call", async () => {
<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
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
=======
          const fetchStub = sinon.stub(global, "URLSearchParams");

          await fetchCourseEnrollments();

          expect(fetchStub.calledOnce).to.be.false;
        });

        it('"elective"', async () => {
          const fetchStub = sinon.stub(global, "URLSearchParams");

          await fetchCourseEnrollments("elective");

          expect(fetchStub.calledOnce).to.be.true;
        });

        it('"mandatory"', async () => {
          const fetchStub = sinon.stub(global, "URLSearchParams");

          await fetchCourseEnrollments("mandatory");

          expect(fetchStub.calledOnce).to.be.true;
>>>>>>> dev:lessons/08-Async-Await-APIs/tests/08-fetchCourseEnrollments.test.js
        });
      });
    });
  });
});
