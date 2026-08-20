import { jest } from "@jest/globals";
import { getRandomJoke } from "../06-getRandomJoke.js";

const JOKE_URL = "https://official-joke-api.appspot.com/random_joke";

xdescribe("getRandomJoke", () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = jest.spyOn(globalThis, "fetch");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should call fetch with the correct URL", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        setup: "Why...",
        punchline: "Because...",
      }),
    });

    await getRandomJoke();

    expect(fetchMock).toHaveBeenCalledWith(JOKE_URL);
  });

  it("should return a joke object when fetch is successful", async () => {
    const mockJoke = {
      setup: "Why don't skeletons fight?",
      punchline: "They don't have the guts.",
    };
    fetchMock.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockJoke),
    });

    const result = await getRandomJoke();
    expect(result).toEqual(mockJoke);
  });

  it("should return an error message if fetch fails", async () => {
    fetchMock.mockRejectedValue(new Error("Fetch failed"));

    const result = await getRandomJoke();
    expect(result).toBe("Failed to fetch joke");
  });
});
