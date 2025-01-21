// test/fetchCourseEnrollments.test.js
import request from "supertest";
import { expect } from "chai";
import { unit8Server } from "../server.js";
import {
  courses,
  students,
} from "../../data/08-fetchCourseEnrollments.data.js";

describe("08 - fetchCourseEnrollments | /college API", function () {
  describe("GET /college/courses", function () {
    it("should return all courses", async function () {
      const response = await request(unit8Server).get("/college/courses");

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(courses);
    });

    describe("GET /college/students", function () {
      it("should return all students", async function () {
        const response = await request(unit8Server).get("/college/students");

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(students);
      });
    });

    describe("Error Handling", function () {
      it("should return 405 Method Not Allowed for non-GET methods on /college/courses", async function () {
        const response = await request(unit8Server).post("/college/courses");

        expect(response.status).to.equal(405);
        expect(response.body.error).to.equal("Method Not Allowed");
      });

      it("should return 405 Method Not Allowed for non-GET methods on /college/students", async function () {
        const response = await request(unit8Server).post("/college/students");

        expect(response.status).to.equal(405);
        expect(response.body.error).to.equal("Method Not Allowed");
      });
    });
  });

  after(() => {
    process.exit(0);
  });
});
