import { expect } from "chai";
import { priceTransformer } from "../04-priceTransformer";
import { shortPrices } from "../data/04-priceTransformer.data";

describe("#4: priceTransformer", () => {
  const transformedObj = priceTransformer(shortPrices);

  it("returns an object", () => {
    expect(transformedObj).to.be.an("object");
  });

  describe("the returned object", () => {
    it("does not have the 'food' key", () => {
      expect(transformedObj).to.not.have.property("food");
    });

    it("does not have the 'price' key", () => {
      expect(transformedObj).to.not.have.property("price");
    });

    it("has each of the food values as keys", () => {
      const foodKeys = shortPrices.map(({ food }) => food);
      const hasAllFoodKeys = Object.keys(transformedObj).every(
        (key) => foodKeys.indexOf(key) !== -1
      );
      expect(hasAllFoodKeys).to.be.true;
    });

    it("has each of the price values as values", () => {
      const priceValues = shortPrices.map(({ price }) => price);
      const hasAllPriceValues = Object.values(transformedObj).every(
        (values) => priceValues.indexOf(values) !== -1
      );
      expect(hasAllPriceValues).to.be.true;
    });
  });
});
