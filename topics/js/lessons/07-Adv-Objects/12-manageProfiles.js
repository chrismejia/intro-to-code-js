/**
 * #12: manageProfiles
 *
 * `manageProfiles` accepts two objects, `profiles` and `updates`, and applies the updates to the profiles.
 *
 * The `profiles` object contains a list of user profiles, each with a unique identifier as the key. The `updates` object contains updates where each key corresponds to a profile ID and each value is an object with fields to update.
 *
 * `manageProfiles` merges the `updates` into the `profiles`, replacing or adding fields as specified.
 *
 * @category 07 - Adv Objects
 * @function manageProfiles
 * @param {Object} profiles - The object containing existing profiles.
 * @param {Object} updates - The object containing updates for the profiles.
 * @returns {Object} The updated profiles object.
 *
 * @example
 * const profiles = {
 *   'user1': { name: 'Alice', age: 25 },
 *   'user2': { name: 'Bob', age: 30 }
 * };
 *
 * const updates = {
 *   'user1': { age: 26 },
 *   'user3': { name: 'Charlie', age: 28 }
 * };
 *
 * manageProfiles(profiles, updates);
 * // Returns:
 * // {
 * //   'user1': { name: 'Alice', age: 26 },
 * //   'user2': { name: 'Bob', age: 30 },
 * //   'user3': { name: 'Charlie', age: 28 }
 * // }
 */
export function manageProfiles(profiles, updates) {
  // Create a new object to hold the updated profiles
  const updatedProfiles = { ...profiles };

  // Iterate over each key in the updates object
  for (const key in updates) {
    if (updates.hasOwnProperty(key)) {
      // If the profile already exists, merge the existing profile with the updates
      if (updatedProfiles.hasOwnProperty(key)) {
        updatedProfiles[key] = { ...updatedProfiles[key], ...updates[key] };
      } else {
        // If the profile does not exist, add it with the new details
        updatedProfiles[key] = updates[key];
      }
    }
  }

  // Return the updated profiles object
  return updatedProfiles;
}

// One-liner
// export function manageProfiles(profiles, updates) {
//   return {
//     ...profiles,
//     ...Object.keys(updates).reduce((acc, key) => {
//       acc[key] = { ...profiles[key], ...updates[key] };
//       return acc;
//     }, {}),
//   };
// }
