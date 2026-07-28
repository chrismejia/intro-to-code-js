import { manageProfiles } from "../12-manageProfiles.js";
import {
  initialProfiles,
  profileUpdates,
  emptyProfiles,
  emptyUpdates,
  unchangedProfiles,
  newProfilesOnly,
  completeOverwriteProfiles,
  expectedProfiles,
  expectedNewProfilesOnly,
  expectedCompleteOverwriteProfiles,
} from "../data/12-manageProfiles.data.js";

describe("#12: manageProfiles", () => {
  it("should return the same profiles object when updates object is empty", () => {
    const result = manageProfiles(initialProfiles, emptyUpdates);
    expect(result).not.toBe(initialProfiles);
  });

  it("should not change profiles that are not updated", () => {
    const result = manageProfiles(unchangedProfiles, profileUpdates);
    expect(result).toEqual(expectedProfiles);
  });

  it("should add new profiles that are not in the initial profiles", () => {
    const result = manageProfiles(initialProfiles, newProfilesOnly);
    expect(result).toEqual(expectedNewProfilesOnly);
  });

  it("should add new profiles from updates when profiles object is empty", () => {
    const result = manageProfiles(emptyProfiles, profileUpdates);
    expect(result).not.toBe(profileUpdates);
    expect(result).toEqual(profileUpdates);
  });

  it("should correctly overwrite existing profiles with new complete data", () => {
    const result = manageProfiles(initialProfiles, completeOverwriteProfiles);
    expect(result).toEqual(expectedCompleteOverwriteProfiles);
  });
});
