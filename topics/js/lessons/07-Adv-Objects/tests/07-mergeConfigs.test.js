import { expect } from "chai";
import { mergeConfigs } from "../07-mergeConfigs";
import {
  defaultThemeConfig,
  userThemeConfig,
  expectedMergedThemeConfig,
  defaultApiConfig,
  customApiConfig,
  expectedMergedApiConfig,
  defaultConfigEmpty,
  userConfigEmpty,
  expectedEmptyMergedConfig,
} from "../data/07-mergeConfigs.data";

describe("#7: mergeConfigs", () => {
  it("should correctly merge configurations when both objects have unique properties", () => {
    const result = mergeConfigs(defaultApiConfig, customApiConfig);
    expect(result).to.deep.equal(expectedMergedApiConfig);
  });

  it("should correctly merge default and user configurations with userConfig taking precedence", () => {
    const result = mergeConfigs(defaultThemeConfig, userThemeConfig);
    expect(result).to.deep.equal(expectedMergedThemeConfig);
  });

  it('should handle the case where "defaultConfig" is empty and "userConfig" is not', () => {
    const result = mergeConfigs(defaultApiConfig, userConfigEmpty);
    expect(result).to.deep.equal(defaultApiConfig);
  });

  it('should handle the case where "userConfig" is empty and "defaultConfig" is not', () => {
    const result = mergeConfigs(defaultApiConfig, userConfigEmpty);
    expect(result).to.deep.equal(defaultApiConfig);
  });

  it("should handle the case where both configs are empty", () => {
    const result = mergeConfigs(defaultConfigEmpty, userConfigEmpty);
    expect(result).to.deep.equal(expectedEmptyMergedConfig);
  });
});
