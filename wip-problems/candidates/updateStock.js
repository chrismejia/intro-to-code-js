/**
 * Updates the stock of products based on an array of orders.
 *
 * @param {Object} products - The object containing products with their prices and stock.
 * @param {Object[]} orders - The array of orders, each containing an array of items.
 * @param {Object[]} orders[].items - The array of items in the order.
 * @param {string} orders[].items[].product - The name of the product.
 * @param {number} orders[].items[].quantity - The quantity of the product to be ordered.
 * @returns {Object} - The updated products object with stock adjusted.
 */
function updateStock(products, orders) {
  orders.forEach((order) => {
    order.items.forEach((item) => {
      const { product, quantity } = item;
      if (products[product]) {
        products[product].stock = Math.max(
          products[product].stock - quantity,
          0
        );
      }
    });
  });
  return products;
}
