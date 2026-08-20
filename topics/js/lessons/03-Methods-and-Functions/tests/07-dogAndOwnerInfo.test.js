import { dogAndOwnerInfo } from "../07-dogAndOwnerInfo.js";

xdescribe("#7: Dog owners and their dogs", () => {
  describe("returns the correct phrase", () => {
    it("when dog is older than their owner", () => {
      expect(dogAndOwnerInfo("Turbo", 10, "Richard", 55)).toBe(
        "Turbo is older than their owner, Richard, by 15 years."
      );
    });

    it("when owner is older than their dog", () => {
      expect(dogAndOwnerInfo("Fido", 1, "Sara", 15)).toBe(
        "Sara is older than their dog, Fido, by 8 years."
      );
    });

    it("owner and dog are the same age", () => {
      expect(dogAndOwnerInfo("Star", 2, "John", 14)).toBe(
        "John and Star are both 14 years old."
      );
    });
  });
});
