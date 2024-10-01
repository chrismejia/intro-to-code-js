// Mock weather API calls
export const fetchForecast = (city) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (city) {
        case "New York":
          resolve({ temperature: 65, condition: "Cloudy" });
          break;
        case "Los Angeles":
          resolve({ temperature: 78, condition: "Clear" });
          break;
        case "Chicago":
          resolve({ temperature: 68, condition: "Rain" });
          break;
        case "Atlantis":
        case "Wakanda":
          reject({ city, reason: "City not found" });
          break;
        case null:
        case undefined:
          reject("City not provided");
          break;
        default:
          reject("Unknown city");
      }
    }, 500);
  });
};

// All successful
export const validCities = ["New York", "Los Angeles", "Chicago"];

export const forecastsSuccess = {
  successful: [
    {
      city: "New York",
      data: { temperature: 65, condition: "Cloudy" },
    },
    {
      city: "Los Angeles",
      data: { temperature: 78, condition: "Clear" },
    },
    {
      city: "Chicago",
      data: { temperature: 68, condition: "Rain" },
    },
  ],
  failed: [],
};

// All failures
export const invalidCities = ["Atlantis", "Wakanda", null];

// Mixed results
export const mixedResultCities = [...validCities, ...invalidCities];

export const mixedForecastResult = {
  successful: [
    {
      city: "New York",
      data: { temperature: 65, condition: "Cloudy" },
    },
    {
      city: "Los Angeles",
      data: { temperature: 78, condition: "Clear" },
    },
    {
      city: "Chicago",
      data: { temperature: 68, condition: "Rain" },
    },
  ],
  failed: ["Atlantis", "Wakanda", null],
};
