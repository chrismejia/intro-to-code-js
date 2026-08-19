import request from "supertest";
import { unit8Server } from "../server.js";

xdescribe("08 - Async/Await & APIs Local Server", () => {
  describe("index route", () => {
    it("should respond with 404 for undefined routes", async () => {
      await request(unit8Server)
        .get("/undefined-route")
        .expect(404)
        .expect("Content-Type", /json/)
        .then((response) => {
          expect(response.body).toEqual({ error: "Route not found" });
        });
    });
  });
});
