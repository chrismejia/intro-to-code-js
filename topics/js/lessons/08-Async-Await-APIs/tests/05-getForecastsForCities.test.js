import { jest } from "@jest/globals";
import { getForecastsForCities } from "../05-getForecastsForCities.js";
import {
  fetchForecast,
  validCities,
  forecastsSuccess,
  invalidCities,
  mixedResultCities,
  mixedForecastResult,
} from "../data/05-getForecastsForCities.data.js";

xdescribe("getForecastsForCities", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should resolve with the forecasts for valid cities", async () => {
    const result = await getForecastsForCities(validCities, fetchForecast);
    expect(result).toEqual(forecastsSuccess);
  });

  it("should handle a mix of valid and invalid cities", async () => {
    const result = await getForecastsForCities(
      mixedResultCities,
      fetchForecast
    );
    expect(result).toEqual(mixedForecastResult);
  });

  it("should return 'Failed to fetch weather data for all cities' if all forecasts fail ", async () => {
    const result = await getForecastsForCities(invalidCities, fetchForecast);
    expect(result).toBe("Failed to fetch weather data for all cities");
  });

  it('should print "All available forecasts fetched" if at least one forecast was retrieved successfully', async () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const cities = ["New York", "Chicago"];

    await getForecastsForCities(cities, fetchForecast);

    expect(consoleSpy).toHaveBeenCalledWith("All available forecasts fetched");
  });
});
