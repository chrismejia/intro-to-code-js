import { jest } from "@jest/globals";
import { fetchQuote } from "../02-fetchQuote.js";
import { quotes } from "../data/02-fetchQuotes.data.js";

xdescribe("fetchQuote", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it("should resolve with a quote from the array", async () => {
    jest.spyOn(Math, "random").mockReturnValueOnce(0.5).mockReturnValueOnce(0);

    const quotePromise = fetchQuote();
    jest.advanceTimersByTime(350);

    await expect(quotePromise).resolves.toBe(quotes[0]);
  });

  it('should reject with "Failed to fetch quote" when Math.random returns less than or equal to 0.1', async () => {
    jest.spyOn(Math, "random").mockReturnValue(0.05);

    const quotePromise = fetchQuote();
    jest.advanceTimersByTime(350);

    await expect(quotePromise).rejects.toBe("Failed to fetch quote");
  });
});
