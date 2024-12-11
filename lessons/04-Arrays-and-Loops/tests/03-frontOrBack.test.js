import { frontOrBack } from "../03-frontOrBack";
import { expect } from "chai";

xdescribe("#3: frontOrBack", () => {
  expect(frontOrBack).to.be.a(
    "function",
    "No `frontOrBack` function found; please check if defined and exported correctly."
  );

  describe("returns a correctly modified array", () => {
    it('when place = "front"; action = "add"', () => {
      const arr1 = [1, 2, 3, 4];
      const empty = [];

      expect(frontOrBack(arr1, "front", "add", 5)).to.deep.equal([
        5, 1, 2, 3, 4,
      ]);
      expect(frontOrBack(empty, "front", "add", 5)).to.deep.equal([5]);
    });

    it('when place = "back"; action = "add"', () => {
      const arr1 = [1, 2, 3, 4];
      const empty = [];

      expect(frontOrBack(arr1, "back", "add", 5)).to.deep.equal([
        1, 2, 3, 4, 5,
      ]);
      expect(frontOrBack(empty, "back", "add", 5)).to.deep.equal([5]);
    });

    it('when place = "front"; action = "remove"', () => {
      const arr1 = [1, 2, 3, 4];
      const oneEle = ["one"];

      expect(frontOrBack(arr1, "front", "remove", 5)).to.deep.equal([2, 3, 4]);
      expect(frontOrBack(oneEle, "front", "remove", 5)).to.deep.equal([]);
    });

    it('when place = "back"; action = "remove"', () => {
      const arr1 = [1, 2, 3, 4];
      const oneEle = ["one"];

      expect(frontOrBack(arr1, "back", "remove", 5)).to.deep.equal([1, 2, 3]);
      expect(frontOrBack(oneEle, "back", "remove", 5)).to.deep.equal([]);
    });
  });
});
