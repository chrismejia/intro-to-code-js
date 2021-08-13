/**
 * Define the function `priceTotaler`.
 * `priceTotaler` accepts a single string input, state, one of three two-letter state abbreviations.
 *
 * `priceTotaler` returns a function that takes in a number, the subtotal, and returns the correct final total after shipping and sales tax.
 *
 * The three states `priceTotaler` needs to account for:
 * - "NY": shipping is 3%; sales tax is 6.35%
 * - "NJ": shipping is 2.5%; sales tax is 8.25%
 * - "CT": shipping is 4%; sales tax is 6%
 *
 * @category 05 - Callbacks
 * @param {String} state
 * @returns {Function}
 *
 * @example
 * const nyBiller = priceTotaler("NY")
 * nyBiller(1000) // => 1095.405 (1000 * 1.03 * 1.0635)
 */
function priceTotaler() {}

export default priceTotaler;
