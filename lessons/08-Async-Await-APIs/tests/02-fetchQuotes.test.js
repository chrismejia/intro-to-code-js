import { expect } from "chai";
import { fetchQuote } from "../02-fetchQuote";
import { quotes } from "../data/02-fetchQuotes.data";
import { stub } from "sinon";

describe("fetchQuote", function () {
  this.timeout(500);

  afterEach(() => {
    // Restore Math.random() after each test to avoid interfering with other tests
    Math.random.restore && Math.random.restore();
  });

  it("should resolve with a quote from the array", async () => {
    // Mock Math.random to ensure it resolves (greater than 0.1)
    stub(Math, "random").returns(0.5); // Force success
    const result = await fetchQuote();
    expect(quotes).to.include(result);
  });

  it('should reject with "Failed to fetch quote" when Math.random returns less than or equal to 0.1', async () => {
    // Mock Math.random to ensure it rejects (less than or equal to 0.1)
    stub(Math, "random").returns(0.05); // Force failure
    try {
      await fetchQuote();
    } catch (error) {
      expect(error).to.equal("Failed to fetch quote");
    }
  });
});
