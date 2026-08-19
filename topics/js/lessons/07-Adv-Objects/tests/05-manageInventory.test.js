import { manageInventory } from "../05-manageInventory.js";
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
} from "../data/05-manageInventory.data.js";

xdescribe("manageInventory", () => {
  it("should return an empty object if no items are provided", () => {
    expect(manageInventory(noItems)).toEqual(expectedEmptyResult);
  });

  it("should handle cases where there is only one item", () => {
    expect(manageInventory(singleItem)).toEqual(expectedSingleItemResult);
  });

  it("should handle items with zero quantity", () => {
    expect(manageInventory(itemsWithZeroQuantity)).toEqual(
      expectedZeroQuantityResult
    );
  });

  it("should correctly aggregate quantities when items have different names", () => {
    expect(manageInventory(itemsWithDifferentNames)).toEqual(
      expectedDifferentNamesResult
    );
  });

  it("should correctly aggregate quantities of each item", () => {
    expect(manageInventory(itemsWithMultipleEntries)).toEqual(
      expectedAggregatedQuantities
    );
  });
});
