/**
 * fetchMultipleUsers
 *
 * The `fetchMultipleUsers` function takes an array of user IDs and retrieves the user data for each.
 *
 * The endpoint to hit is `https://jsonplaceholder.typicode.com/users/${userId}`.
 *
 *
 *
 * If the fetch request fails or times out after 3 seconds, the user ID is added to the `failed` array.
 *
 *
 *
 *
 * @function fetchMultipleUsers
 * @param {number[]} userIds - An array of user IDs.
 * @returns {Promise<{successful: object[], failed: number[]}>} - Resolves with an object containing two arrays:
 *  - `successful`: An array of user objects that were fetched successfully.
 *  - `failed`: An array of user IDs that failed to fetch.
 *
 * @example
 * const result = await fetchMultipleUsers([1, 2, 3]);
 * // Returns: { successful: [{id: 1, ...}, {id: 2, ...}], failed: [3] }
 *
 * @example
 * const result = await fetchMultipleUsers([5, 6]);
 * // If all requests fail:
 * // Returns: { successful: [], failed: [5, 6] }
 */

export const fetchMultipleUsers = async (userIds) => {
  const fetchUser = async (userId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok)
      throw new Error(`Failed to fetch user with ID: ${userId}`);
    return await response.json();
  };

  const results = await Promise.allSettled(
    userIds.map((userId) =>
      fetchUser(userId)
        .then((userData) => ({ status: "fulfilled", value: userData }))
        .catch(() => ({ status: "rejected", userId }))
    )
  );

  const successful = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  const failed = results
    .filter((result) => result.status === "rejected")
    .map((result) => result.userId);

  return { successful, failed };
};
