import { validateObject } from "../04-validateObject.js";
import {
  schema,
  validObj,
  invalidObj,
  incompleteObj,
  wrongTypeObj,
  extraKeysObj,
} from "../data/04-validateObject.data.js";

describe("#4: validateObject", () => {
  describe("should return true", () => {
    it("for a valid object", () => {
      const result = validateObject(validObj, schema);
      expect(result).toBe(true);
    });

    it("if the input object has extra keys not in the schema", () => {
      const result = validateObject(extraKeysObj, schema);
      expect(result).toBe(true);
    });

    it("when the schema object is empty but input object is not", () => {
      const emptySchema = validateObject(incompleteObj, {});
      expect(emptySchema).toBe(true);
    });

    it("when both inputs are empty objects", () => {
      const bothEmpty = validateObject({}, {});
      expect(bothEmpty).toBe(true);
    });
  });

  describe("should return false", () => {
    it("for an invalid object", () => {
      const result = validateObject(invalidObj, schema);
      expect(result).toBe(false);
    });

    it("when the object is missing a required key", () => {
      const result = validateObject(incompleteObj, schema);
      expect(result).toBe(false);
    });

    it("when the object has an incorrect type", () => {
      const result = validateObject(wrongTypeObj, schema);
      expect(result).toBe(false);
    });

    it("when the input object is empty and schema is not", () => {
      const emptyInput = validateObject({}, schema);
      expect(emptyInput).toBe(false);
    });

    it("should handle objects with boolean values correctly", () => {
      const schemaWithBoolean = { active: "boolean" };
      const validBooleanObj = { active: true };
      const result = validateObject(validBooleanObj, schemaWithBoolean);
      expect(result).toBe(true);
    });
  });
});
