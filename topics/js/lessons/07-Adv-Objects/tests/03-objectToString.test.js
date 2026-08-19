import { objectToString } from "../03-objectToString.js";
import {
  simpleObj,
  simpleObjAsString,
  nestedObj,
  nestedObjAsString,
  arrayWithObjects,
  arrayWithObjectsAsString,
  specialCharsObj,
  specialCharsObjAsString,
} from "../data/03-objectToString.data.js";

describe("#3: objectToString", () => {
  it("returns a string", () => {
    const result = objectToString({});
    expect(typeof result).toBe("string");
  });

  it('should serialize an empty object to "{}"', () => {
    const result = objectToString({});
    expect(result).toBe("{}");
  });

  it("should serialize a simple object to a JSON string", () => {
    const result = objectToString(simpleObj);
    expect(result).toBe(simpleObjAsString);
  });

  it("should serialize a nested object to a JSON string", () => {
    const result = objectToString(nestedObj);
    expect(result).toBe(nestedObjAsString);
  });

  it("should serialize an object with arrays to a JSON string", () => {
    const result = objectToString(arrayWithObjects);
    expect(result).toBe(arrayWithObjectsAsString);
  });

  it("should handle an object with special characters correctly", () => {
    const result = objectToString(specialCharsObj);
    expect(result).toBe(specialCharsObjAsString);
  });
});
