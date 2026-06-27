import { wordFrequencyAnalyzer } from "../wordFrequencyAnalyzer";

describe("wordFrequencyAnalyzer", () => {
  it("should count word frequencies correctly", () => {
    const text = "Hello, hello! How are you? Are you there?";
    const result = wordFrequencyAnalyzer(text);
    expect(result).toEqual(
      new Map([
        ["hello", 2],
        ["how", 1],
        ["are", 2],
        ["you", 2],
        ["there", 1],
      ])
    );
  });

  it("should handle an empty string", () => {
    const text = "";
    const result = wordFrequencyAnalyzer(text);
    expect(result).toEqual(new Map());
  });

  it("should ignore punctuation and be case insensitive", () => {
    const text = "Hi! Hi? HI. hi, hi";
    const result = wordFrequencyAnalyzer(text);
    expect(result).toEqual(new Map([["hi", 5]]));
  });

  it("should handle a text with one word", () => {
    const text = "test";
    const result = wordFrequencyAnalyzer(text);
    expect(result).toEqual(new Map([["test", 1]]));
  });
});
