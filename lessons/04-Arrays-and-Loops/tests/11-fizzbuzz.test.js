import { expect } from "chai";
import { fizzBuzz } from "../11-fizzbuzz";
import { lengthTest } from "../data/11-fizzBuzz.data";

xdescribe("#11: fizzBuzz", () => {
  expect(fizzBuzz).to.be.a(
    "function",
    "No `fizzBuzz` function found; please check if defined and exported correctly."
  );

  const result = fizzBuzz(100);

  it("returns an array", () => {
    expect(result).to.be.an("array");
  });

  it("the array is the correct length", () => {
    lengthTest.map((length) => {
      expect(fizzBuzz(length)).to.have.lengthOf(length);
    });
  });

  it("each number not divisible by either 3 or 4 is itself", () => {
    const eachStringNumAppears = result
      .filter((_, idx) => (idx + 1) % 3 !== 0 && (idx + 1) % 4 !== 0)
      .every((entry) => typeof entry === "number");
    expect(eachStringNumAppears).to.be.true;
  });

  it("each number divisible only by 3 is `Fizz`", () => {
    const eachFizzAppears = result
      .filter((_, idx) => (idx + 1) % 3 === 0 && (idx + 1) % 12 !== 0)
      .every((entry) => entry === "Fizz");
    expect(eachFizzAppears).to.be.true;
  });

  it("each number divisible only by 4 is `Buzz`", () => {
    const eachBuzzAppears = result
      .filter((_, idx) => (idx + 1) % 4 === 0 && (idx + 1) % 12 !== 0)
      .every((entry) => entry === "Buzz");
    expect(eachBuzzAppears).to.be.true;
  });

  it("each number divisible by both 3 and 4 is `FizzBuzz`", () => {
    const eachFizzBuzzAppears = result
      .filter((_, idx) => (idx + 1) % 12 === 0)
      .every((entry) => entry === "FizzBuzz");
    expect(eachFizzBuzzAppears).to.be.true;
  });
});
