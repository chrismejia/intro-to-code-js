import { waterState } from "../index.js";
import {
  gasTemperatures,
  liquidTemperatures,
  solidTemperatures,
} from "../data/06-waterState.data.js";

/**
 * Remove the `x` from `xdescribe` after the previous exercise passes.
 * Run `npm run test:02` from the repo root after each change.
 */

describe("#6: waterState", () => {
  it("returns `solid` at and below the freezing boundary", () => {
    solidTemperatures.forEach((temperature) => {
      expect(waterState(temperature)).toBe("solid");
    });
  });

  it("returns `liquid` between the two boundaries", () => {
    liquidTemperatures.forEach((temperature) => {
      expect(waterState(temperature)).toBe("liquid");
    });
  });

  it("returns `gas` at and above the boiling boundary", () => {
    gasTemperatures.forEach((temperature) => {
      expect(waterState(temperature)).toBe("gas");
    });
  });
});
