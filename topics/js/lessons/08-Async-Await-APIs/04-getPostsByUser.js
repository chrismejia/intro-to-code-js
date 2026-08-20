/**
 * getPostsByUser
 *
 * `getPostsByUser` accepts two callbacks, `fetchUserData` and `fetchUserPosts`.
 *
 * Assume both callbacks are predefined; you just need to call them correctly within `getPostsByUser`.
 *
 * - `fetchUserData`: A callback that accepts no parameters and returns a Promise that resolves to an object with the shape `{ id: number, name: string }`.
 * - `fetchUserPosts`: A callback that accepts the user's ID and returns a Promise that resolves to an array of objects, each with the shape `{ id: number, title: string }`.
 *
 * If both callbacks succeed, `getPostsByUser` returns an object containing the user data and their associated posts.
 * If an error occurs during either callback, `getPostsByUser` handles the error and returns an object with an error message.
 *
 * @category 08 - Async/Await & APIs
 * @function getPostsByUser
 * @param {Function} fetchUserData - A callback that fetches user data and returns a Promise.
 * @param {Function} fetchUserPosts - A callback that fetches user posts based on the user's ID and returns a Promise.
 * @returns {Promise<Object>} Resolves with an object containing the user data and posts, or an error message.
 *
 * @example
 * const userData = await getPostsByUser(fetchUserData, fetchUserPosts);
 * // Returns: { user: { id: 1, name: 'Alice' }, posts: [ { id: 101, title: 'Post 1' } ] }
 *
 * @example
 * const userData = await getPostsByUser(fetchUserData, fetchUserPosts);
 * // If an error occurs during fetching:
 * // Returns: { error: "Failed to fetch data" }
 */

export const getPostsByUser = () => {};
