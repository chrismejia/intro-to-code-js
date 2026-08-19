import { jest } from "@jest/globals";
import { deepClone } from "../10-deepClone.js";
import {
  objNoDate,
  clonedObjWithoutDate,
  objWithDate,
  clonedObjWithDate,
} from "../data/10-deepClone.data.js";

describe("#10: deepClone", () => {
  let objectAssignSpy;
  let structuredCloneSpy;

  beforeEach(() => {
    objectAssignSpy = jest.spyOn(Object, "assign");
    structuredCloneSpy = jest.spyOn(globalThis, "structuredClone");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return an object", () => {
    const result = deepClone(objNoDate);
    expect(typeof result).toBe("object");
  });

  it("should correctly clone objects without Date objects", () => {
    const result = deepClone(objNoDate);
    expect(result).toEqual(clonedObjWithoutDate);
  });

  it("should not mutate the original object", () => {
    const result = deepClone(objNoDate);
    expect(result).not.toBe(objNoDate);
    expect(result).toEqual(clonedObjWithoutDate);
  });

  it("should not call Object.assign()", () => {
    deepClone(objNoDate);
    expect(objectAssignSpy).not.toHaveBeenCalled();
  });

  it("should not call structuredClone()", () => {
    deepClone(objNoDate);
    expect(structuredCloneSpy).not.toHaveBeenCalled();
  });

  // Makes problem FAR too difficult to solve without recursion
  // solution uses stack
  //
  // it("should ensure the returned object is not a shallow copy of the original (no shared reference)", () => {
  //   const obj1 = { a: 1, b: { c: 2 } };
  //   const obj2 = deepClone(obj1); // Assuming deepClone function is tested here

  //   // Check that obj2 is not the same reference as obj1
  //   expect(obj2).not.toBe(obj1);

  //   // Check that obj2 deeply equals obj1 (all values are the same)
  //   expect(obj2).toEqual(obj1);

  //   // Further check that nested objects also don't share the same reference
  //   expect(obj2.b).not.toBe(obj1.b);
  // });

  describe("BONUS", () => {
    it("should correctly clone objects with Date objects", () => {
      const result = deepClone(objWithDate);
      expect(result).toEqual(clonedObjWithDate);
    });

    it("should correctly clone Date objects and preserve their functionality", () => {
      const result = deepClone(objWithDate);
      expect(result.date).toBeInstanceOf(Date);
      expect(result.date.getTime()).toBe(objWithDate.date.getTime());
    });
  });
});
