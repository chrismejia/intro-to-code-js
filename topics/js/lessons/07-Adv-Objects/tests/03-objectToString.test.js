import { expect } from "chai";
import { objectToString } from "../03-objectToString";
import {
  simpleObj,
  simpleObjAsString,
  nestedObj,
  nestedObjAsString,
  arrayWithObjects,
  arrayWithObjectsAsString,
  specialCharsObj,
  specialCharsObjAsString,
} from "../data/03-objectToString.data";

describe("#3: objectToString", () => {
  it("returns a string", () => {
    const result = objectToString({});
    expect(result).to.be.a("string");
  });

  it('should serialize an empty object to "{}"', () => {
    const result = objectToString({});
    expect(result).to.equal("{}");
  });

  it("should serialize a simple object to a JSON string", () => {
    const result = objectToString(simpleObj);
    expect(result).to.equal(simpleObjAsString);
  });

  it("should serialize a nested object to a JSON string", () => {
    const result = objectToString(nestedObj);
    expect(result).to.equal(nestedObjAsString);
  });

  it("should serialize an object with arrays to a JSON string", () => {
    const result = objectToString(arrayWithObjects);
    expect(result).to.equal(arrayWithObjectsAsString);
  });

  it("should handle an object with special characters correctly", () => {
    const result = objectToString(specialCharsObj);
    expect(result).to.equal(specialCharsObjAsString);
  });
});
