import { expect } from "chai";
import { firstSuccessfulResult } from "../03-firstSuccessfulResult";
import { spy } from "sinon";

describe("firstSuccessfulResult", function () {
  this.timeout(5000); // Ensures the test has enough time to run all promises

  let consoleLogSpy;

  beforeEach(() => {
    // Create a spy for console.log
    consoleLogSpy = spy(console, "log");
  });

  afterEach(() => {
    // Restore the original console.log after each test
    consoleLogSpy.restore();
  });

  describe("should return the result of the first successfully resolved task", () => {
    it("when that Promise is the fastest to resolve", async () => {
      const tasks = [
        new Promise((resolve) => setTimeout(() => resolve("Success"), 200)),
        new Promise((_, reject) => setTimeout(() => reject("Failure 1"), 300)),
        new Promise((_, reject) => setTimeout(() => reject("Failure 2"), 400)),
      ];

      const result = await firstSuccessfulResult(tasks);

      expect(result).to.equal("Success");
    });

    it("when that Promise is middle-of-the-pack to resolve", async () => {
      const tasks = [
        new Promise((_, reject) => setTimeout(() => reject("Failure 1"), 200)),
        new Promise((resolve) => setTimeout(() => resolve("Success"), 300)),
        new Promise((_, reject) => setTimeout(() => reject("Failure 2"), 400)),
      ];

      const result = await firstSuccessfulResult(tasks);

      expect(result).to.equal("Success");
    });

    it("when that Promise is last to resolve", async () => {
      const tasks = [
        new Promise((_, reject) => setTimeout(() => reject("Failure 1"), 200)),
        new Promise((_, reject) => setTimeout(() => reject("Failure 2"), 300)),
        new Promise((resolve) => setTimeout(() => resolve("Success"), 400)),
      ];

      const result = await firstSuccessfulResult(tasks);

      expect(result).to.equal("Success");
    });
  });

  it('should reject with "All tasks failed" if all tasks fail', async () => {
    const allFailedTasks = [
      new Promise((_, reject) => setTimeout(() => reject("Failure 1"), 300)),
      new Promise((_, reject) => setTimeout(() => reject("Failure 2"), 400)),
    ];

    try {
      await firstSuccessfulResult(allFailedTasks);
    } catch (error) {
      expect(error.message).to.equal("All tasks failed");
    }
  });

  describe('should log "All tasks completed"', () => {
    it("when one task succeeds", async () => {
      const tasks = [
        new Promise((_, reject) => setTimeout(() => reject("Failure 1"), 200)),
        new Promise((resolve) => setTimeout(() => resolve("Success"), 300)),
      ];

      await firstSuccessfulResult(tasks);
      expect(consoleLogSpy.calledWith("All tasks completed")).to.be.true;
    });

    it("when all tasks fail", async () => {
      const tasks = [
        new Promise((_, reject) => setTimeout(() => reject("Failure 1"), 200)),
        new Promise((_, reject) => setTimeout(() => reject("Failure 2"), 300)),
      ];

      try {
        await firstSuccessfulResult(tasks);
      } catch (error) {
        expect(error.message).to.equal("All tasks failed");
      }
      expect(consoleLogSpy.calledWith("All tasks completed")).to.be.true;
    });
  });
});
