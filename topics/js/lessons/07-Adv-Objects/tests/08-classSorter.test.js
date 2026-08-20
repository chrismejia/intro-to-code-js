import { classSorter } from "../08-classSorter.js";
import {
  emptyRoster,
  onlyStudentsRoster,
  onlyStudentsExpected,
  onlyTeachersRoster,
  onlyTeachersExpected,
  oneGradeSaTRoster,
  oneGradeSaTExpected,
  twoGradeSaTRoster,
  twoGradeSaTExpected,
  multipleGradeSaTRoster,
  multipleGradeSaTExpected,
} from "../data/08-classSorter.data.js";

xdescribe("#8: classSorter", () => {
  it("should return an empty object for an empty roster", () => {
    const sortedClasses = classSorter(emptyRoster);
    expect(sortedClasses).toEqual({});
  });

  describe("should correctly sort a roster", () => {
    describe("one grade", () => {
      it("only students", () => {
        const sortedClasses = classSorter(onlyStudentsRoster);
        expect(sortedClasses).toEqual(onlyStudentsExpected);
      });

      it("only teachers", () => {
        const sortedClasses = classSorter(onlyTeachersRoster);
        expect(sortedClasses).toEqual(onlyTeachersExpected);
      });

      it("students and teachers", () => {
        const sortedClasses = classSorter(oneGradeSaTRoster);
        expect(sortedClasses).toEqual(oneGradeSaTExpected);
      });
    });

    describe("two grades", () => {
      it("students and teachers", () => {
        const sortedClasses = classSorter(twoGradeSaTRoster);
        expect(sortedClasses).toEqual(twoGradeSaTExpected);
      });
    });

    describe("multiple grades", () => {
      it("students and teachers", () => {
        const sortedClasses = classSorter(multipleGradeSaTRoster);
        expect(sortedClasses).toEqual(multipleGradeSaTExpected);
      });
    });
  });
});
