import { doesTheMathWork } from "../08-doesTheMathWork";
import { expect } from "chai";

xdescribe("#8: doesTheMathWork", () => {
  describe("returns a string", () => {
    it("for addition", () => {
      expect(doesTheMathWork(1, 2, 3)).to.be.a("string");
      expect(doesTheMathWork(5, 2, 7)).to.be.a("string");
      expect(doesTheMathWork(10, 2, 12)).to.be.a("string");
    });

    it("for subtraction", () => {
      expect(doesTheMathWork(3, 2, 1)).to.be.a("string");
      expect(doesTheMathWork(7, 2, 5)).to.be.a("string");
      expect(doesTheMathWork(12, 2, 10)).to.be.a("string");
    });

    it("for multiplication", () => {
      expect(doesTheMathWork(3, 3, 9)).to.be.a("string");
      expect(doesTheMathWork(15, 5, 75)).to.be.a("string");
      expect(doesTheMathWork(12, 2, 24)).to.be.a("string");
    });

    it("for division", () => {
      expect(doesTheMathWork(50, 2, 25)).to.be.a("string");
      expect(doesTheMathWork(81, 9, 9)).to.be.a("string");
      expect(doesTheMathWork(48, 8, 6)).to.be.a("string");
    });

    it("for no operation", () => {
      expect(doesTheMathWork(1, 99, 72)).to.be.a("string");
      expect(doesTheMathWork(5, 84, 7)).to.be.a("string");
      expect(doesTheMathWork(11, 222, 333)).to.be.a("string");
    });
  });

  describe("returns the correct operation", () => {
    it("first two inputs add (+) to third input -> 'addition'", () => {
      expect(doesTheMathWork(1, 2, 3)).to.equal("addition");
      expect(doesTheMathWork(5, 2, 7)).to.equal("addition");
      expect(doesTheMathWork(10, 2, 12)).to.equal("addition");
    });

    it("first two inputs subtract (-) to third input -> 'subtraction'", () => {
      expect(doesTheMathWork(3, 2, 1)).to.equal("subtraction");
      expect(doesTheMathWork(7, 2, 5)).to.equal("subtraction");
      expect(doesTheMathWork(12, 2, 10)).to.equal("subtraction");
    });

    it("first two inputs multiply (*) to third input -> 'multiplication'", () => {
      expect(doesTheMathWork(3, 3, 9)).to.equal("multiplication");
      expect(doesTheMathWork(15, 5, 75)).to.equal("multiplication");
      expect(doesTheMathWork(12, 2, 24)).to.equal("multiplication");
    });

    it("first two inputs divide (/) to third input -> 'division'", () => {
      expect(doesTheMathWork(50, 2, 25)).to.equal("division");
      expect(doesTheMathWork(81, 9, 9)).to.equal("division");
      expect(doesTheMathWork(48, 8, 6)).to.equal("division");
    });

    it("first two inputs don't resolve to third input -> 'no operation'", () => {
      expect(doesTheMathWork(1, 99, 72)).to.equal("no operation");
      expect(doesTheMathWork(5, 84, 7)).to.equal("no operation");
      expect(doesTheMathWork(11, 222, 333)).to.equal("no operation");
    });
  });
});
