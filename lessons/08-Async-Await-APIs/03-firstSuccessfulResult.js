/**
 * firstSuccessfulResult
 *
 * `firstSuccessfulResult` accepts an array of promises and returns a promise that resolves with the result of the first successfully resolved promise.
 * If all promises fail, `firstSuccessfulResult` rejects with the message "All tasks failed."
 *
 * @category 08 - Async/Await & APIs
 * @function firstSuccessfulResult
 * @param {Promise[]} tasks - An array of promises to race.
 * @returns {Promise<string>} - A promise that resolves with the first successful result, or rejects with an error message if all fail.
 *
 * @example
 * const tasks = [
 *  new Promise((_, reject) => setTimeout(() => reject('Error 1'), 200)),
 *  new Promise((resolve) => setTimeout(() => resolve('Success 2'), 300)),
 *  new Promise((_, reject) => setTimeout(() => reject('Error 3'), 400));
 * ]
 *
 * firstSuccessfulResult(tasks)
 *   .then(result => console.log(result)) // Outputs: 'Success 2'
 *   .catch(error => console.error(error));
 */
export const firstSuccessfulResult = async (tasks) => {
  try {
    const result = await Promise.any(tasks);
    return result;
  } catch (error) {
    throw new Error("All tasks failed");
  } finally {
    console.log("All tasks completed");
  }
};

// one-liner
// export const firstSuccessfulResult = async (tasks) =>
//   Promise.any(tasks)
//     .finally(() => console.log("All tasks completed"))
//     .catch(() => {
//       throw new Error("All tasks failed");
//     });
