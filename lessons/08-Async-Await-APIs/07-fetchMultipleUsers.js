/**
 * fetchMultipleUsers
 *
 * The `fetchMultipleUsers` function takes an array of user IDs and retrieves the user data for each. To do this, you will define a helper function, `fetchUser`, to call within `fetchMultipleUsers` function body.
 *
 * `fetchMultipleUsers` should return a single data object containing:
 * - `successful`: an array of all the successfully fetched data objects
 * - `failed`: an array of all the `userId` that failed their fetch
 *
 * HINT:
 * Even though you're processing the results of the `userIds` in the input array, remember that each fetch is its own individual thing.
 *
 * BONUS:
 * Write `fetchMultipleUsers` WITHOUT using any kind of for-loop.
 */

/**
 * `fetchUser` accepts a `userId`. It returns an object on a successful fetch, and an Error message `Failed to fetch user with ID: ${userId}` on a failure.
 *
 * `fetchUser` should send a `GET` request to `https://jsonplaceholder.typicode.com/users/${userId}`, where `userId` is a single user id found within the `userIds` array. The fetch call should also have the following headers:
 * - an Authorization header with value `Bearer fake123fake456fake789`
 * - Content-Type and Accept headers with value `"application/json"`
 *
 * @category 08 - Async/Await & APIs
 * @function fetchUser
 * @param {number} userId - The ID of the user to fetch.
 * @returns {Promise<Object | Error>} Resolves with a data object on successful fetch, and an Error on a failed one.
 * @example
 * // Success
 * const userData = await fetchUser(1);
 * //=> { id: 1, name: "Leanne Graham" }
 *
 * @example
 * // Failure
 * const userData = await fetchUser(99);
 * // Error: `Failed to fetch user with ID: 99`
 */

export const fetchUser = () => {};

/**
 * @category 08 - Async/Await & APIs
 * @function fetchMultipleUsers
 * @param {number[]} userIds - An array of user IDs.
 * @returns {Promise<{successful: object[], failed: number[]}>} - Resolves with an object containing two arrays:
 *  - `successful`: An array of user objects that were fetched successfully.
 *  - `failed`: An array of user IDs that failed to fetch.
 *
 * @example
 * // Mixed successes:
 * const result = await fetchMultipleUsers([ 1, 2, 3 ]);
 * // {
 * //   successful: [
 * //     { id: 1, ... },
 * //     { id: 2, ... }
 * //   ],
 * //   failed: [ 3 ]
 * // }
 *
 * @example
 * // If all requests fail:
 * const result = await fetchMultipleUsers([ 5, 6 ]);
 * // {
 * //   successful: [],
 * //   failed: [ 5, 6 ]
 * // }
 */

export const fetchMultipleUsers = () => {};
