/**
 * #1: delayedGreeting
 *
 * `delayedGreeting` function simulates a greeting message that is logged to the console after a specified delay.
 *
 * `delayedGreeting` accepts three parameters:
 * - `name`: The name of the person to greet.
 * - `delay`: The delay, in milliseconds, after which the greeting is triggered.
 * - `callback`: A function that will be executed after the delay, which receives the greeting message as its argument.
 *
 * `delayedGreeting` should wait for the specified delay, then construct a greeting message in the format: `"Hello, <name>!"`.
 * It should then call the `callback` function with the constructed greeting message.
 *
 * @param {string} name - The name of the person to greet.
 * @param {number} delay - The time, in milliseconds, to wait before logging the greeting.
 * @param {function} callback - The callback function to be executed with the greeting message after the delay.
 * @returns {void} This function doesn't return a value directly.
 *
 * @example
 * delayedGreeting('Alice', 2000, (greeting) => console.log(greeting));
 * // After 2 seconds, logs: "Hello, Alice!"
 *
 * @example
 * delayedGreeting('Bob', 1000, (greeting) => console.log(greeting));
 * // After 1 second, logs: "Hello, Bob!"
 */
export function delayedGreeting(name, delay, callback) {
  setTimeout(() => {
    const greeting = `Hello, ${name}!`;
    callback(greeting);
  }, delay);
}

// One-liner
export const delayedGreetingOneLiner = (name, delay, callback) =>
  setTimeout(() => callback(`Hello, ${name}!`), delay);
