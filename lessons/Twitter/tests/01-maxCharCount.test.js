import maxCharCount from "../01-maxCharCount";
import { expect } from "chai";

describe("#1: maxCharCount", function () {
  it("returns a string", function () {
    const testStr = "Test string.";
    const result = maxCharCount(testStr);
    expect(result).to.be.a("string");
  });

  describe("returns the string untouched", function () {
    it("if the input is under 280 characters", function () {
      const shortStr = "This is a short test text tweet under 280 characters";
      const result = maxCharCount(shortStr);

      expect(result).to.equal(shortStr);
    });

    it("if the input is exactly 280 characters", function () {
      const twoEighty =
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas";

      const result = maxCharCount(twoEighty);
      expect(result).to.equal(twoEighty);
    });
  });

  it("truncates the string to 280 characters if greater than 280", function () {
    const fourHundred =
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.";
    const expected =
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it w";

    const result = maxCharCount(fourHundred);
    expect(result).to.equal(expected);
  });
});
