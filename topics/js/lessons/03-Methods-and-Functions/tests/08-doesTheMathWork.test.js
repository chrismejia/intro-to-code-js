import { doesTheMathWork } from "../08-doesTheMathWork.js";

xdescribe("#8: doesTheMathWork", () => {
  describe("returns a string", () => {
    it("for addition", () => {
      expect(typeof doesTheMathWork(1, 2, 3)).toBe("string");
      expect(typeof doesTheMathWork(5, 2, 7)).toBe("string");
      expect(typeof doesTheMathWork(10, 2, 12)).toBe("string");
    });

    it("for subtraction", () => {
      expect(typeof doesTheMathWork(3, 2, 1)).toBe("string");
      expect(typeof doesTheMathWork(7, 2, 5)).toBe("string");
      expect(typeof doesTheMathWork(12, 2, 10)).toBe("string");
    });

    it("for multiplication", () => {
      expect(typeof doesTheMathWork(3, 3, 9)).toBe("string");
      expect(typeof doesTheMathWork(15, 5, 75)).toBe("string");
      expect(typeof doesTheMathWork(12, 2, 24)).toBe("string");
    });

    it("for division", () => {
      expect(typeof doesTheMathWork(50, 2, 25)).toBe("string");
      expect(typeof doesTheMathWork(81, 9, 9)).toBe("string");
      expect(typeof doesTheMathWork(48, 8, 6)).toBe("string");
    });

    it("for no operation", () => {
      expect(typeof doesTheMathWork(1, 99, 72)).toBe("string");
      expect(typeof doesTheMathWork(5, 84, 7)).toBe("string");
      expect(typeof doesTheMathWork(11, 222, 333)).toBe("string");
    });
  });

  describe("returns the correct operation", () => {
    it("first two inputs add (+) to third input -> 'addition'", () => {
      expect(doesTheMathWork(1, 2, 3)).toBe("addition");
      expect(doesTheMathWork(5, 2, 7)).toBe("addition");
      expect(doesTheMathWork(10, 2, 12)).toBe("addition");
    });

    it("first two inputs subtract (-) to third input -> 'subtraction'", () => {
      expect(doesTheMathWork(3, 2, 1)).toBe("subtraction");
      expect(doesTheMathWork(7, 2, 5)).toBe("subtraction");
      expect(doesTheMathWork(12, 2, 10)).toBe("subtraction");
    });

    it("first two inputs multiply (*) to third input -> 'multiplication'", () => {
      expect(doesTheMathWork(3, 3, 9)).toBe("multiplication");
      expect(doesTheMathWork(15, 5, 75)).toBe("multiplication");
      expect(doesTheMathWork(12, 2, 24)).toBe("multiplication");
    });

    it("first two inputs divide (/) to third input -> 'division'", () => {
      expect(doesTheMathWork(50, 2, 25)).toBe("division");
      expect(doesTheMathWork(81, 9, 9)).toBe("division");
      expect(doesTheMathWork(48, 8, 6)).toBe("division");
    });

    it("first two inputs don't resolve to third input -> 'no operation'", () => {
      expect(doesTheMathWork(1, 99, 72)).toBe("no operation");
      expect(doesTheMathWork(5, 84, 7)).toBe("no operation");
      expect(doesTheMathWork(11, 222, 333)).toBe("no operation");
    });
  });
});
