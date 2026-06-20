import request from "supertest";
import { expect } from "chai";
import { unit8Server } from "../server.js";

describe("08 - Async/Await & APIs Local Server", () => {
  describe("index route", () => {
    it("should respond with 404 for undefined routes", async () => {
      await request(unit8Server)
        .get("/undefined-route")
        .expect(404)
        .expect("Content-Type", /json/)
        .then((response) => {
          expect(response.body).to.deep.equal({ error: "Route not found" });
        });
    });
  });
});
