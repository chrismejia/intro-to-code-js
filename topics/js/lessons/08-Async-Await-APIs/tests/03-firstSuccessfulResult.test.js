import { jest } from "@jest/globals";
import { firstSuccessfulResult } from "../03-firstSuccessfulResult.js";

xdescribe("firstSuccessfulResult", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("should return the result of the first successfully resolved task", () => {
    it("when that Promise is the fastest to resolve", async () => {
      const tasks = [
        new Promise((resolve) => setTimeout(() => resolve("Success"), 200)),
        new Promise((_, reject) => setTimeout(() => reject("Failure 1"), 300)),
        new Promise((_, reject) => setTimeout(() => reject("Failure 2"), 400)),
      ];

      const result = await firstSuccessfulResult(tasks);

      expect(result).toBe("Success");
    });

    it("when that Promise is middle-of-the-pack to resolve", async () => {
      const tasks = [
        new Promise((_, reject) => setTimeout(() => reject("Failure 1"), 200)),
        new Promise((resolve) => setTimeout(() => resolve("Success"), 300)),
        new Promise((_, reject) => setTimeout(() => reject("Failure 2"), 400)),
      ];

      const result = await firstSuccessfulResult(tasks);

      expect(result).toBe("Success");
    });

    it("when that Promise is last to resolve", async () => {
      const tasks = [
        new Promise((_, reject) => setTimeout(() => reject("Failure 1"), 200)),
        new Promise((_, reject) => setTimeout(() => reject("Failure 2"), 300)),
        new Promise((resolve) => setTimeout(() => resolve("Success"), 400)),
      ];

      const result = await firstSuccessfulResult(tasks);

      expect(result).toBe("Success");
    });
  });

  it('should reject with "All tasks failed" if all tasks fail', async () => {
    const allFailedTasks = [
      new Promise((_, reject) => setTimeout(() => reject("Failure 1"), 300)),
      new Promise((_, reject) => setTimeout(() => reject("Failure 2"), 400)),
    ];

    await expect(firstSuccessfulResult(allFailedTasks)).rejects.toThrow(
      "All tasks failed"
    );
  });

  describe('should log "All tasks completed"', () => {
    it("when one task succeeds", async () => {
      const tasks = [
        new Promise((_, reject) => setTimeout(() => reject("Failure 1"), 200)),
        new Promise((resolve) => setTimeout(() => resolve("Success"), 300)),
      ];

      await firstSuccessfulResult(tasks);
      expect(consoleLogSpy).toHaveBeenCalledWith("All tasks completed");
    });

    it("when all tasks fail", async () => {
      const tasks = [
        new Promise((_, reject) => setTimeout(() => reject("Failure 1"), 200)),
        new Promise((_, reject) => setTimeout(() => reject("Failure 2"), 300)),
      ];

      await expect(firstSuccessfulResult(tasks)).rejects.toThrow(
        "All tasks failed"
      );
      expect(consoleLogSpy).toHaveBeenCalledWith("All tasks completed");
    });
  });
});
