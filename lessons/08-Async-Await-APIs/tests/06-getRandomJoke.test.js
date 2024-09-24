import { expect } from "chai";
import sinon from "sinon";
import { getRandomJoke } from "../06-getRandomJoke";

describe("getRandomJoke", () => {
  let fetchStub;

  beforeEach(() => {
    fetchStub = sinon.stub(global, "fetch");
  });

  afterEach(() => {
    fetchStub.restore();
  });

  it("should call fetch with the correct URL", () => {
    fetchStub.resolves(
      new Response(JSON.stringify({ setup: "Why...", punchline: "Because..." }))
    );

    // Can be synchronous b/c just a simple check to ensure fetch called correctly.
    getRandomJoke();

    expect(
      fetchStub.calledWith("https://official-joke-api.appspot.com/random_joke")
    ).to.be.true;
  });

  it("should return a joke object when fetch is successful", async () => {
    const mockJoke = {
      setup: "Why don't skeletons fight?",
      punchline: "They don't have the guts.",
    };
    fetchStub.resolves(new Response(JSON.stringify(mockJoke)));

    const result = await getRandomJoke();
    expect(result).to.deep.equal(mockJoke);
  });

  it("should return an error message if fetch fails", async () => {
    fetchStub.rejects(new Error("Fetch failed"));

    const result = await getRandomJoke();
    expect(result).to.equal("Failed to fetch joke");
  });
});
