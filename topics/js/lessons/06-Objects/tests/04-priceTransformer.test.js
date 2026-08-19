import { priceTransformer } from "../04-priceTransformer.js";
import { shortPrices } from "../data/04-priceTransformer.data.js";

describe("#4: priceTransformer", () => {
  const transformedObj = priceTransformer(shortPrices);

  it("returns an object", () => {
    expect(typeof transformedObj).toBe("object");
  });

  describe("the returned object", () => {
    it("does not have the 'food' key", () => {
      expect(transformedObj).not.toHaveProperty("food");
    });

    it("does not have the 'price' key", () => {
      expect(transformedObj).not.toHaveProperty("price");
    });

    it("has each of the food values as keys", () => {
      const foodKeys = shortPrices.map(({ food }) => food);
      const hasAllFoodKeys = Object.keys(transformedObj).every(
        (key) => foodKeys.indexOf(key) !== -1
      );
      expect(hasAllFoodKeys).toBe(true);
    });

    it("has each of the price values as values", () => {
      const priceValues = shortPrices.map(({ price }) => price);
      const hasAllPriceValues = Object.values(transformedObj).every(
        (values) => priceValues.indexOf(values) !== -1
      );
      expect(hasAllPriceValues).toBe(true);
    });
  });
});
