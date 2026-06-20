import sinon from "sinon";
import { expect } from "chai";
import { unit8Server } from "../server/server.js";
import { BASE_URL, fetchCourseEnrollments } from "../08-fetchCourseEnrollments.js";
import {
  allCoursesAns,
  electiveCoursesAns,
  mandatoryCoursesAns,
} from "../data/08-fetchCourseEnrollments.data.js";

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
    }
  });

  afterEach(() => {
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
    });

    it("should return an object with keys `courses`, `courseCount`, `studentCount`, ", async () => {
      const allResults = await Promise.all([
        fetchCourseEnrollments(),
        fetchCourseEnrollments("elective"),
        fetchCourseEnrollments("mandatory"),
      ]);

      allResults.forEach((result) => {
        expect(result).to.be.an("object");
        expect(result).to.have.property("courses");
        expect(result).to.have.property("courseCount");
        expect(result).to.have.property("studentCount");
      });
    });
  });

  describe("All courses", () => {
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

      const expectedUrls = [
        `${BASE_URL}/college/courses`,
        `${BASE_URL}/college/students`,
      ];

      // Check if both URLs are called, regardless of the order
      expect(calledUrls).to.include.members(expectedUrls);
      expect(fetchStub.calledTwice).to.be.true;
    });

    it("should return correct data for all courses", async function () {
      const result = await fetchCourseEnrollments();
      expect(result).to.deep.equal(allCoursesAns);
    });
  });

  describe("Elective courses", () => {
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

      const expectedUrls = [
        `${BASE_URL}/college/courses?courseType=elective`,
        `${BASE_URL}/college/students`,
      ];

      // Check if both URLs are called, regardless of the order
      expect(calledUrls).to.include.members(expectedUrls);
      expect(fetchStub.calledTwice).to.be.true;
    });

    it("should return correct data for all courses", async function () {
      const result = await fetchCourseEnrollments("elective");
      expect(result).to.deep.equal(electiveCoursesAns);
    });
  });

  describe("Mandatory courses", () => {
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

      const expectedUrls = [
        `${BASE_URL}/college/courses?courseType=mandatory`,
        `${BASE_URL}/college/students`,
      ];

      // Check if both URLs are called, regardless of the order
      expect(calledUrls).to.include.members(expectedUrls);
      expect(fetchStub.calledTwice).to.be.true;
    });

    it("should return correct data for mandatory courses", async function () {
      const result = await fetchCourseEnrollments("mandatory");
      expect(result).to.deep.equal(mandatoryCoursesAns);
    });

    describe("BONUS", () => {
      describe("should only call URLSearchParams once only if courseType is a valid type", () => {
        it("no courseType -- no call", async () => {
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
        });
      });
    });
  });
});
