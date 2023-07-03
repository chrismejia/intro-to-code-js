import { expect } from "chai";
import sinon from "sinon";
import countToTen from "../01-countToTen";

xdescribe("#1: countToTen", function () {
  const logSpy = sinon.spy(console, "log");
  const countSpy = sinon.spy(countToTen);
  const oneRun = countSpy(1);
  const countSpyCalls = logSpy.getCalls();

  it("returns undefined", function () {
    expect(oneRun).to.be.undefined;
  });

  describe("for numbers less than 10", function () {
    it("logs startNum first", function () {
      const firstLogNum = countSpyCalls[0].args[0];
      expect(firstLogNum).to.equal(1);
    });

    it("logs each number between startNum and 10, inclusive", function () {
      if (countSpyCalls.length === 0) {
        expect.fail("No numbers have been logged.");
      } else {
        const twoToTenCalls = countSpyCalls.slice(1);

        twoToTenCalls.forEach(({ args }, index) => {
          const indexMatchToTotal = index + 2; // 0 becomes 2, etc
          const currentLogVal = args[0]; // compare to matchedIndex
          expect(indexMatchToTotal).to.equal(currentLogVal);
        });
      }
    });

    it("recursively calls itself the correct number of times", function () {
      expect(countSpyCalls.length).to.equal(10);
    });
  });

  // needed as log
  logSpy.restore();
});
