export const defaultThemeConfig = { theme: "light", language: "en" };
export const userThemeConfig = { theme: "dark" };
export const expectedMergedThemeConfig = { theme: "dark", language: "en" };

export const defaultApiConfig = {
  apiUrl: "http://api.example.com",
  timeout: 1000,
};
export const customApiConfig = { timeout: 2000, retries: 3 };
export const expectedMergedApiConfig = {
  apiUrl: "http://api.example.com",
  timeout: 2000,
  retries: 3,
};

export const defaultConfigEmpty = {};
export const userConfigEmpty = {};
export const expectedEmptyMergedConfig = {};
