/**
 * getRandomJoke
 *
 * `getRandomJoke` fetches a random joke from the Official Joke API.
 * `getRandomJoke` retrieves the joke's setup and punchline if the request is successful.
 * If the request fails, it returns an error message of "Failed to fetch joke" instead.
 *
 * The Official Joke API: https://official-joke-api.appspot.com/random_joke
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch MDN - Using Fetch API}
 *
 * @category 08 - Async/Await & APIs
 * @function getRandomJoke
 * @returns {Promise<Object|string>} A Promise that resolves to an object containing the joke data (`{ setup: string, punchline: string }`) or a string with an error message.
 *
 * @example
 * // Successful fetch
 * const joke = await getRandomJoke();
 * // joke: { setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts." }
 *
 * @example
 * // Failed fetch
 * const joke = await getRandomJoke();
 * // joke: "Failed to fetch joke"
 */

export const getRandomJoke = () => {};
