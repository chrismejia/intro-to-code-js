/**
 * #7: mergeConfigs
 *
 * `mergeConfigs` accepts two objects, `defaultConfig` and `userConfig`.
 *
 * `mergeConfigs` merges the `userConfig` object into the `defaultConfig` object. If the same key exists in both objects, the value from `userConfig` overwrites the value from `defaultConfig`.
 *
 * `mergeConfigs` returns a new object that combines properties from both objects, giving preference to the `userConfig` properties when conflicts occur.
 *
 * @category 07 - Adv Objects
 * @function mergeConfigs
 * @param {Object} defaultConfig - The default configuration object.
 * @param {Object} userConfig - The user-provided configuration object that overrides defaultConfig.
 * @returns {Object} A new object with properties from both input objects, with userConfig values taking precedence.
 *
 * @example
 * const defaults = { theme: 'light', language: 'en' };
 * const user = { theme: 'dark' };
 * mergeConfigs(defaults, user);
 * // Returns: { theme: 'dark', language: 'en' }
 *
 * const configDefaults = { apiUrl: 'http://api.example.com', timeout: 1000 };
 * const customConfig = { timeout: 2000, retries: 3 };
 * mergeConfigs(configDefaults, customConfig);
 * // Returns: { apiUrl: 'http://api.example.com', timeout: 2000, retries: 3 }
 */
export function mergeConfigs() {}
