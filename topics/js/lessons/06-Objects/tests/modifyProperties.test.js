import modifyProperties from "../modifyProperties.js";
import {
  updateExistingProperties,
  addNewProperties,
  deleteProperties,
  multipleOperations,
  emptyOperationsArray,
} from "../data/modifyProperties.data.js";

describe("modifyProperties", function () {
  it("should update existing properties", function () {
    const { obj, operations, expected } = updateExistingProperties;
    const result = modifyProperties(obj, operations);
    expect(result).toEqual(expected);
  });

  it("should add new properties", function () {
    const { obj, operations, expected } = addNewProperties;
    const result = modifyProperties(obj, operations);
    expect(result).toEqual(expected);
  });

  it("should delete properties when value is null", function () {
    const { obj, operations, expected } = deleteProperties;
    const result = modifyProperties(obj, operations);
    expect(result).toEqual(expected);
  });

  it("should handle multiple operations", function () {
    const { obj, operations, expected } = multipleOperations;
    const result = modifyProperties(obj, operations);
    expect(result).toEqual(expected);
  });

  it("should handle empty operations array", function () {
    const { obj, operations, expected } = emptyOperationsArray;
    const result = modifyProperties(obj, operations);
    expect(result).toEqual(expected);
  });
});
