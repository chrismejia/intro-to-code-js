// test/fetchCourseEnrollments.test.js
import request from "supertest";
import { unit8Server } from "../server.js";
import {
  courses,
  students,
} from "../../data/08-fetchCourseEnrollments.data.js";

describe("08 - fetchCourseEnrollments | /college API", function () {
  describe("GET /college/courses", function () {
    it("should return all courses when no query params are provided", async function () {
      const response = await request(unit8Server).get("/college/courses");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(courses);
    });

    it("should validate that `courseType` is undefined when no query params are provided", async function () {
      const response = await request(unit8Server).get("/college/courses");

      expect(response.status).toBe(200);
      expect(response.body.every((course) => course.type)).toBe(true);
    });

    it("should return only mandatory courses when `courseType=mandatory`", async function () {
      const response = await request(unit8Server).get(
        "/college/courses?courseType=mandatory",
      );

      const onlyMandatory = courses.filter(
        (course) => course.type === "mandatory",
      );

      expect(response.status).toBe(200);
      expect(response.body).toEqual(onlyMandatory);
    });

    it("should return only elective courses when `courseType=elective`", async function () {
      const response = await request(unit8Server).get(
        "/college/courses?courseType=elective",
      );

      const onlyElectives = courses.filter(
        (course) => course.type === "elective",
      );

      expect(response.status).toBe(200);
      expect(response.body).toEqual(onlyElectives);
    });

    it("should validate query params when `courseType` is provided", async function () {
      const invalidValues = ["", "randomType", "mandatoryy", null, undefined];

      for (const invalid of invalidValues) {
        const response = await request(unit8Server).get(
          `/college/courses?courseType=${invalid}`,
        );
        expect(response.status).toBe(400); // Bad request for invalid courseType
        expect(response.body.error).toBe(
          "Invalid courseType. Valid values are 'mandatory' or 'elective'.",
        );
      }
    });
  });

  describe("GET /college/students", function () {
    it("should return all students", async function () {
      const response = await request(unit8Server).get("/college/students");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(students);
    });
  });

  describe("Error Handling", function () {
    it("should return 405 Method Not Allowed for non-GET methods on /college/courses", async function () {
      const methods = ["post", "put", "patch", "delete"];

      const responses = await Promise.all(
        methods.map((method) =>
          request(unit8Server)[method]("/college/courses"),
        ),
      );

      responses.forEach((response) => {
        expect(response.status).toBe(405);
        expect(response.body.error).toBe("Method Not Allowed");
      });
    });

    it("should return 405 Method Not Allowed for non-GET methods on /college/students", async function () {
      const methods = ["post", "put", "patch", "delete"];

      const responses = await Promise.all(
        methods.map((method) =>
          request(unit8Server)[method]("/college/students"),
        ),
      );

      responses.forEach((response) => {
        expect(response.status).toBe(405);
        expect(response.body.error).toBe("Method Not Allowed");
      });
    });
  });
});
