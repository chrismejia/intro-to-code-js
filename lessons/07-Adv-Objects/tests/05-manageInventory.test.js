import { expect } from "chai";
import { manageInventory } from "../05-manageInventory";
import {
  itemsWithMultipleEntries,
  singleItem,
  noItems,
  itemsWithZeroQuantity,
  itemsWithDifferentNames,
  expectedAggregatedQuantities,
  expectedSingleItemResult,
  expectedEmptyResult,
  expectedZeroQuantityResult,
  expectedDifferentNamesResult,
} from "../data/05-manageInventory.data";

xdescribe("manageInventory", () => {
  it("should return an empty object if no items are provided", () => {
    expect(manageInventory(noItems)).to.deep.equal(expectedEmptyResult);
  });

  it("should handle cases where there is only one item", () => {
    expect(manageInventory(singleItem)).to.deep.equal(expectedSingleItemResult);
  });

  it("should handle items with zero quantity", () => {
    expect(manageInventory(itemsWithZeroQuantity)).to.deep.equal(
      expectedZeroQuantityResult
    );
  });

  it("should correctly aggregate quantities when items have different names", () => {
    expect(manageInventory(itemsWithDifferentNames)).to.deep.equal(
      expectedDifferentNamesResult
    );
  });

  it("should correctly aggregate quantities of each item", () => {
    expect(manageInventory(itemsWithMultipleEntries)).to.deep.equal(
      expectedAggregatedQuantities
    );
  });
});
