/**
 * getForecastsForCities
 *
 * `getForecastsForCities` accepts an array of `cities` to fetch weather data for, and a callback `fetchForecast`.
 *
 * Assume the `fetchForecast` callback is predefined; you just need to call in correctly.
 *
 * The `fetchForecast` callback accepts a string, `city`, and returns a Promise that resolves with the city's weather data, or rejects if the city is not found.
 *
 * `getForecastsForCities` gathers all the results of the Promises returned for each city, returns them in an object, grouped by how their `fetchForecast` Promise resolved.
 * - `successful`: An array of city names and their weather data for successful fetches.
 * - `failed`: An array of city names for failed fetches.
 *
 * If all forecast requests fail, `fetchForecast` instead returns a failure message.
 *
 * @category 08 - Async/Await & APIs
 * @function getForecastsForCities
 * @param {Array<string>} cities - An array of city names to fetch weather data for.
 * @param {Function} fetchForecast - A callback that takes a city name and returns a Promise resolving with weather data.
 * @returns {Promise<Object|string>} Resolves with an object containing weather data or an error message.
 *
 * @example
 * const weatherData = await getForecastsForCities(["New York", "Atlantis", "Los Angeles"], fetchForecast);
 * console.log(weatherData)
 * // {
 * //   successful: [
 * //     {
 * //       city: "New York",
 * //       data: { temperature: 65, condition: "Cloudy" },
 * //     },
 * //     {
 * //       city: "Los Angeles",
 * //       data: { temperature: 78, condition: "Clear" },
 * //     },
 * //   ],
 * //   failed: ["Atlantis"],
 * // };
 *
 * @example
 * const weatherData = await getForecastsForCities(["Vice City", "Hyrule Town"], fetchForecast);
 * // Returns: "Failed to fetch weather data for all cities"
 */

export async function getForecastsForCities(cities, fetchForecast) {
  const weatherPromises = cities.map((city) => fetchForecast(city));

  const results = await Promise.allSettled(weatherPromises);

  const successful = [];
  const failed = [];

  results.forEach((result, index) => {
    const city = cities[index];

    if (result.status === "fulfilled") {
      successful.push({ city, data: result.value });
    } else {
      failed.push(city);
    }
  });

  if (successful.length === 0) {
    return "Failed to fetch weather data for all cities";
  }

  console.log("All available forecasts fetched");

  return { successful, failed };
}
