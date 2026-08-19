import { fizzBuzz } from "../11-fizzbuzz.js";
import { lengthTest } from "../data/11-fizzBuzz.data.js";

xdescribe("#11: fizzBuzz", () => {
  expect(typeof fizzBuzz).toBe("function");

  const result = fizzBuzz(100);

  it("returns an array", () => {
    expect(Array.isArray(result)).toBe(true);
  });

  it("the array is the correct length", () => {
    lengthTest.map((length) => {
      expect(fizzBuzz(length)).toHaveLength(length);
    });
  });

  it("each number not divisible by either 3 or 4 is itself", () => {
    const eachStringNumAppears = result
      .filter((_, idx) => (idx + 1) % 3 !== 0 && (idx + 1) % 4 !== 0)
      .every((entry) => typeof entry === "number");
    expect(eachStringNumAppears).toBe(true);
  });

  it("each number divisible only by 3 is `Fizz`", () => {
    const eachFizzAppears = result
      .filter((_, idx) => (idx + 1) % 3 === 0 && (idx + 1) % 12 !== 0)
      .every((entry) => entry === "Fizz");
    expect(eachFizzAppears).toBe(true);
  });

  it("each number divisible only by 4 is `Buzz`", () => {
    const eachBuzzAppears = result
      .filter((_, idx) => (idx + 1) % 4 === 0 && (idx + 1) % 12 !== 0)
      .every((entry) => entry === "Buzz");
    expect(eachBuzzAppears).toBe(true);
  });

  it("each number divisible by both 3 and 4 is `FizzBuzz`", () => {
    const eachFizzBuzzAppears = result
      .filter((_, idx) => (idx + 1) % 12 === 0)
      .every((entry) => entry === "FizzBuzz");
    expect(eachFizzBuzzAppears).toBe(true);
  });
});
