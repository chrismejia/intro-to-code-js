import request from "supertest";
<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/server/tests/server.test.js
=======
import { expect } from "chai";
>>>>>>> dev:lessons/08-Async-Await-APIs/server/tests/server.test.js
import { unit8Server } from "../server.js";

describe("08 - Async/Await & APIs Local Server", () => {
  describe("index route", () => {
    it("should respond with 404 for undefined routes", async () => {
      await request(unit8Server)
        .get("/undefined-route")
        .expect(404)
        .expect("Content-Type", /json/)
        .then((response) => {
<<<<<<< HEAD:topics/js/lessons/08-Async-Await-APIs/server/tests/server.test.js
          expect(response.body).toEqual({ error: "Route not found" });
=======
          expect(response.body).to.deep.equal({ error: "Route not found" });
>>>>>>> dev:lessons/08-Async-Await-APIs/server/tests/server.test.js
        });
    });
  });
});
