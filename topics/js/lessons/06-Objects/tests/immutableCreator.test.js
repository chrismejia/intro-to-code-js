import { expect } from "chai";
import immutableCreator from "../immutableCreator";
import {
  modifyExistingProperties,
  addNewProperties,
  noUpdates,
  overwriteProperties,
  emptyOriginalObject,
} from "../data/immutableCreator.data";

describe("immutableCreator", function () {
  it("should modify existing properties and add new ones", function () {
    const { originalObj, updates, expected } = modifyExistingProperties;
    const result = immutableCreator(originalObj, updates);
    expect(result).to.deep.equal(expected);
  });

  it("should add new properties to the original object", function () {
    const { originalObj, updates, expected } = addNewProperties;
    const result = immutableCreator(originalObj, updates);
    expect(result).to.deep.equal(expected);
  });

  it("should return the original object if no updates are provided", function () {
    const { originalObj, updates, expected } = noUpdates;
    const result = immutableCreator(originalObj, updates);
    expect(result).to.deep.equal(expected);
  });

  it("should overwrite existing properties with new values", function () {
    const { originalObj, updates, expected } = overwriteProperties;
    const result = immutableCreator(originalObj, updates);
    expect(result).to.deep.equal(expected);
  });

  it("should handle an empty original object", function () {
    const { originalObj, updates, expected } = emptyOriginalObject;
    const result = immutableCreator(originalObj, updates);
    expect(result).to.deep.equal(expected);
  });
});
