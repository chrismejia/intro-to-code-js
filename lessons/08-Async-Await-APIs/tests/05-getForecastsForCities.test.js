import { expect } from "chai";
import sinon from "sinon";
import { getForecastsForCities } from "../05-getForecastsForCities";
import {
  fetchForecast,
  validCities,
  forecastsSuccess,
  invalidCities,
  mixedResultCities,
  mixedForecastResult,
} from "../data/05-getForecastsForCities.data";

describe.only("getForecastsForCities", function () {
  this.timeout(7500); // Ensure enough time for async tasks

  it("should resolve with the forecasts for valid cities", async () => {
    const result = await getForecastsForCities(validCities, fetchForecast);
    expect(result).to.deep.equal(forecastsSuccess);
  });

  it("should handle a mix of valid and invalid cities", async () => {
    const result = await getForecastsForCities(
      mixedResultCities,
      fetchForecast
    );
    expect(result).to.deep.equal(mixedForecastResult);
  });

  it("should return 'Failed to fetch weather data for all cities' if all forecasts fail ", async () => {
    const result = await getForecastsForCities(invalidCities, fetchForecast);
    expect(result).to.deep.equal("Failed to fetch weather data for all cities");
  });

  it('should print "All available forecasts fetched" if at least one forecast was retrieved successfully', async () => {
    const consoleSpy = sinon.spy(console, "log");
    const cities = ["New York", "Chicago"];

    await getForecastsForCities(cities, fetchForecast);

    expect(consoleSpy.calledWith("All available forecasts fetched")).to.be.true;
    consoleSpy.restore();
  });
});
