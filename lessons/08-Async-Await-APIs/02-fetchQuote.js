import { quotes } from "./data/02-fetchQuotes.data";

/**
 * #2: fetchQuote
 *
 * `fetchQuote` function simulates an asynchronous request to fetch a random motivational quote.
 *
 * `fetchQuote` returns a promise that resolves with a random quote after 350ms.
 * - The promise has a 10% chance of rejection with the message `"Failed to fetch quote"`.
 *
 * The `quotes` array has been imported above for your use.
 *
 * HINT:
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promises | MDN}
 *
 * @category 08 - Async/Await & APIs
 * @function fetchQuote
 * @returns {Promise<string>} - A promise that resolves to a random quote or rejects with an error message.
 *
 * @example
 * fetchQuote().then(quote => {
 *   console.log(quote); // Random motivational quote
 * }).catch(error => {
 *   console.log(error); // "Failed to fetch quote"
 * });
 */
export const fetchQuote = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const successRate = Math.random();
      if (successRate > 0.1) {
        const randomIdx = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIdx];
        resolve(randomQuote);
      } else {
        reject("Failed to fetch quote");
      }
    }, 350);
  });
};

// One-liner alternative:
// export const fetchQuote = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(
//       () =>
//         Math.random() > 0.1
//           ? resolve(quotes[Math.floor(Math.random() * 4)])
//           : reject("Failed to fetch quote"),
//       350
//     )
//   );
