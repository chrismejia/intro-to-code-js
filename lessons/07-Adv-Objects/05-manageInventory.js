/**
 * #5: manageInventory
 *
 * `manageInventory` accepts an array of inventory items and
 * `manageInventory` returns an object with each item's name as the key and its quantity as the value.
 *
 * Each inventory item is an object with `name` and `quantity` properties.
 * The `quantity` of each item should be summed if there are multiple items with the same name.
 *
 * @category 07 - Adv Objects
 * @function manageInventory
 * @param {Array<Object>} items - An array of objects where each object represents an inventory item with `name` and `quantity`.
 * @returns {Object} An object where each key is an item's name, and its value is the total quantity of that item.
 *
 * @example
 * const items = [
 *   { name: 'apple', quantity: 3 },
 *   { name: 'banana', quantity: 2 },
 *   { name: 'apple', quantity: 1 }
 * ];
 *
 * manageInventory(items);
 * // Returns: { apple: 4, banana: 2 }
 */
// Simple loop
// export function manageInventory(items) {
//   const inventory = {};

//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     if (inventory[item.name]) {
//       inventory[item.name] += item.quantity;
//     } else {
//       inventory[item.name] = item.quantity;
//     }
//   }

//   return inventory;
// }

export const manageInventory = (items) =>
  items.reduce((acc, item) => {
    if (acc[item.name]) {
      acc[item.name] += item.quantity;
    } else {
      acc[item.name] = item.quantity;
    }
    return acc;
  }, {});
